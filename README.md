#	tsing
__Help to master romanization systems elder than Hanyu Pinyin__

在我们目前所使用的 *汉语拼音* 之前，汉字拉丁化注音方案可谓五花八门。其中尤以 *威妥玛拼音* 最为系统、也最为知名，此外，*邮政拼音* 则在专有名词（主要是地名）领域影响广泛。本工具旨在帮助大家快速查找不同注音之间的对照关系。

##	Table of contents

*	[Get Started](#get-started)
#   [Commands](#commands)
*	[API](#api)
* 	[Examples](#examples)
*	[Why tsinghua](#why-tsinghua)
*	[Honorable Dependents](#honorable-dependents)
*	[About](#about)
*	[References](#references)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/tsing)

##	Get Started

In CLI:
```bash
# Convert Hanyu Pinyin to Wade-Giles Romanization.
tsing py2wg jiang
# OUTPUT: chiang
```

In JavaScript:
```javascript
const wade = require('tsing/wade');

let pinyin = wade.fromPinyin('jiang');
// RETURN: [ 'chiang' ]
```

##  Commmands

*   __tsing py2wg__  
    执行 *汉语拼音* 至 *威妥玛拼音* 的转换。

##	API

### wade

通过 `require('tsing/wade')` 引用 *威妥玛拼音* 工具包。

### postal

通过 `require('tsing/postal')` 引用 *邮政拼音* 工具包。

##  Examples

##  Why *tsing*

##  Honorable Dependents

##  About

##  References

*   维基百科，[威妥瑪拼音](https://zh.wikipedia.org/wiki/威妥瑪拼音)
*   维基百科，[邮政式拼音](https://zh.wikipedia.org/zh-cn/郵政式拼音)