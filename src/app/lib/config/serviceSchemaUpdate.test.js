const fs = require('fs');
const serviceDir = '../../../../src/app/lib/config/services';
const { service } = require(serviceDir + '/news.js');

it('stuff', () => {
  const serviceFiles = fs.readdirSync('src/app/lib/config/services');

  const { consentBanner } = service.default.translations;

  // console.log(JSON.stringify(consentBanner, null, 2));

  const content = parseSheetContent();

  consentBanner.cookie = {
    amp: {
      accept: content['7'],
      reject: content['9'],
      initial: {
        title: content['4'],
        description: consentBanner.cookie.description.international,
        manage: 'Manage settings',
      },
      manage: {
        title: content['10'],
        description: {
          para1: content['11'],
          para2: content['12'],
          heading2: content['13'],
          para3: content['14'],
          para4: {
            text: content['15'],
            url:
              'https://www.bbc.co.uk/usingthebbc/strictly-necessary-cookies/',
          },
          para5: content['16'],
          heading3: content['17'],
          para6: content['18'],
          para7: {
            text: content['19'],
            url:
              'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
          },
          para8: content['20'],
          para9: content['21'],
        },
      },
    },
    canonical: {
      title: consentBanner.cookie.title,
      description: consentBanner.cookie.description,
      accept: consentBanner.cookie.accept,
      reject: consentBanner.cookie.reject,
      rejectUrl:
        'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
    },
  };

  console.log('\n\n\n');

  console.log(JSON.stringify(consentBanner.cookie, null, 2));
});

const parseSheetContent = () => {
  const source = `Let us know you agree to data collection on AMP
  On this accelerated mobile page (AMP) we and our partners collect browsing data to provide you with the best online experience and to personalise the advertising shown to you.
  "Some of these technologies are essential to the running of this page, while others such as those for personalised advertising are optional and require your consent.
  You may be asked to set these preferences again if you visit non-AMP bbc.com pages.  "
  Accept data collection and continue
  Manage my settings
  Reject data collection and continue
  Manage consent settings on AMP pages 
  These settings apply to AMP pages only. You may be asked to set these preferences again when you visit non-AMP BBC pages.
  The lightweight mobile page you have visited has been built using Google AMP technology. 
  Strictly necessary data collection
  To make our web pages work, we store some limited information on your device without your consent.
  Read more about the essential information we store on your device to make our web pages work.
  We use local storage to store your consent preferences on your device.
  Optional data collection
  When you consent to data collection on AMP pages you are consenting to allow us to display personalised ads that are relevant to you when you are outside of the UK.
  Read more about how we personalise ads in the BBC and our advertising partners.
  "You can choose not to receive personalised ads by clicking “Reject data collection and continue” below. Please note that you will still see advertising, but it will not be personalised to you.
   "
  You can change these settings by clicking “Ad Choices / Do not sell my info” in the footer at any time. `.replace(
    /\"/g,
    '',
  );

  console.log(source);

  const buildKey = list => {
    const first = list.map((item, i) => ({ [`${i + 4}`]: item }));
    return Object.assign({}, ...first);
  };

  const joinKey = [
    ['6', '7'],
    ['21', '22'],
  ];

  let processed = buildKey(source.split('\n').map(x => x.trim()));

  joinKey.forEach(([dest, source]) => {
    processed[dest] = `${processed[dest]}\n${processed[source]}`;
    delete processed[source];
  });

  const result = buildKey(Object.values(processed));

  return result;
};
