var myArgs = process.argv.slice(2);

const fs = require('fs');
const serviceDir = '../../../../src/app/lib/config/services';
const [_, serviceFileName] = myArgs;
const servicesPath = 'src/app/lib/config/services';
const { service } = require(serviceDir + '/' + serviceFileName);
const clipboardy = require('clipboardy');

it('stuff', () => {
  const serviceFiles = fs.readdirSync('src/app/lib/config/services');

  const { consentBanner } = service.trad.translations;

  // console.log(JSON.stringify(consentBanner, null, 2));

  const content = parseSheetContent();

  consentBanner.cookie = {
    amp: {
      accept: content['8'],
      reject: content['10'],
      initial: {
        title: content['4'],
        description: consentBanner.cookie.description.international,
        manage: content['9'],
      },
      manage: {
        title: content['11'],
        description: {
          para1: content['12'],
          para2: content['13'],
          heading2: content['14'],
          para3: content['15'],
          para4: {
            text: content['16'],
            url:
              'https://www.bbc.co.uk/usingthebbc/strictly-necessary-cookies/',
          },
          para5: content['17'],
          heading3: content['18'],
          para6: content['19'],
          para7: {
            text: content['20'],
            url:
              'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
          },
          para8: content['21'],
          para9: content['22'],
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

  const newCookie = JSON.stringify(consentBanner.cookie, null, 2);

  const filePath = `${servicesPath}/${serviceFileName}`;
  const contents = fs.readFileSync(filePath, 'utf8');
  const output = contents.replace(
    /cookie: {(.|\n)*media:/g,
    `cookie: ${newCookie}\},media:`,
  );
  // fs.writeFileSync(filePath, output);

  clipboardy.writeSync(newCookie);
});

const parseSheetContent = () => {
  const source = clipboardy
    .readSync()
    .replace(/"\n/g, '\n')
    .replace(/\n\s*"/g, '\n')
    .replace(/""/g, '"');

  console.log(source);

  const buildKey = list => {
    const first = list.map((item, i) => ({ [`${i + 4}`]: item }));
    return Object.assign({}, ...first);
  };

  // const joinKey = [
  //   [15, 16],
  //   [20, 21],
  //   [24, 25],
  // ];
  const joinKey = [
    // [8, 9],
    // [7, 8],
  ];

  // const joinKey = [[7, 8]];

  let processed = buildKey(source.split('\n').map(x => x.trim()));

  console.log(JSON.stringify(processed, null, 2));

  joinKey.forEach(([dest, source]) => {
    processed[dest] = `${processed[dest]}\n${processed[source]}`.trim();
  });

  joinKey.forEach(([dest, source]) => {
    delete processed[source];
  });

  const result = buildKey(Object.values(processed));

  console.log(JSON.stringify(result, null, 2));

  return result;
};
