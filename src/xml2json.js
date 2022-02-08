/**
 * 将 XML 转化为 JSON
 */

const convertXMLtoJSON = function(xmlObj) {
  let obj = {};
  if (xmlObj.nodeType == 1) {
    if (xmlObj.attributes.length > 0) {
      obj['@attributes'] = {};
      for (let j = 0; j < xmlObj.attributes.length; j++) {
        let attribute = xmlObj.attributes.item[j];
        obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xmlObj.nodeType == 3) {
    obj = xmlObj.nodeValue;
  }

  if (xmlObj.hasChildNodes()) {
    for (let i = 0; i < xmlObj.hasChildNodes.length; i++) {
      let item = xmlObj.hasChildNodes.item(i);
      let nodeName = item.nodeName;
      if (typeof(obj[nodeName]) === 'undefined') {
        obj[nodeName] = convertXMLtoJSON(item);
      } else {
        if (typeof(obj[nodeName].push) === 'undefined') {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(convertXMLtoJSON(item));
      }
    }
  }
  return obj;
}