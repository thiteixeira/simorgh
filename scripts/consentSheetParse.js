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
You can change these settings by clicking “Ad Choices / Do not sell my info” in the footer at any time. `;

const buildKey = list => {
  const first = list.map((item, i) => ({ [`${i + 4}`]: item }));
  return Object.assign({}, ...first);
};

const joinKey = [['6', '7']];

let processed = buildKey(
  source
    .split('\n')
    .map(x => x.trim())
    .reduce((acc, item) => (item === '"' ? acc : [...acc, item]), []),
);

joinKey.forEach(([dest, source]) => {
  processed[dest] = `${processed[dest]}\n${processed[source]}`;
  delete processed[source];
});

processed = buildKey(Object.values(processed));

console.log(processed.length + 3);
console.log(JSON.stringify(processed, null, 2));
