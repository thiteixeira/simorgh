import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { ReverbClient } from '@bbc/reverb';

const getNoJsATIPageViewUrl = atiPageViewUrl =>
  atiPageViewUrl.includes('x8=[simorgh]')
    ? atiPageViewUrl.replace('x8=[simorgh]', 'x8=[simorgh-nojs]')
    : `${atiPageViewUrl}&x8=[simorgh-nojs]`;

const renderNoScriptTrackingPixel = atiPageViewUrl => (
  <noscript>
    <img
      height="1px"
      width="1px"
      alt=""
      // This should probably have been a styled component. But the author is
      // lazy and didn't want to write a fuzzy matcher for the unit AND e2e
      // tests (you can't predict the class names chosen by emotion)
      style={{ position: 'absolute' }}
      src={getNoJsATIPageViewUrl(atiPageViewUrl)}
    />
  </noscript>
);

const CanonicalATIAnalytics = ({ pageviewParams }) => {
  const Reverb = new ReverbClient({
    getPageVariables: () =>
      Promise.resolve({
        name: 'news.articles.c0000000001o.page',
        destination: 'NEWS_PS_TEST',
        producer: 'NEWS',
        section: null,
        site: 'news',
        contentId: 'urn:bbc:optimo:c0000000001o',
        contentType: 'article',
        edition: '' || null,
        language: 'en-GB',
        additionalProperties: {
          app_type: 'responsives',
          app_name: 'news',
          custom_var_1: '2018-01-01T12:01:00.000Z',
          custom_var_2: '2018-01-01T13:00:00.000Z',
        },
      }),
    getUserVariables: () => Promise.resolve({}),
  });

  const [atiPageViewUrl] = useState(
    process.env.SIMORGH_ATI_BASE_URL + pageviewParams,
  );

  useEffect(() => {
    Reverb.initialise().then(async () => {
      Reverb.viewEvent();
    });
  }, [atiPageViewUrl]);

  return renderNoScriptTrackingPixel(atiPageViewUrl);
};

CanonicalATIAnalytics.propTypes = {
  pageviewParams: string.isRequired,
};

export default CanonicalATIAnalytics;
