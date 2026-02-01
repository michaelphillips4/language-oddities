
import WordCategories, {PoemInfo, LineInfo } from "./definitions";
import {randomRange} from "./helpers";
import {getSentenceMap } from "./sentenceDefinitions";




export const createPoem = (data: WordCategories) => {

 console.log("CreatePoem :",data);

  const numLines = randomRange(4, 10);

  let poem: PoemInfo = {
    numberOfLines: numLines + 1,
    lines: [],
    usedValues: new Map<string, string[]>(),
    allData: data,
  };

  const sentenceMap = getSentenceMap(data);

  for (let i = 0; i < numLines + 1; i++) {

    const numType = randomRange(0, 6);

    const line: LineInfo = { type: numType + 1, text: "" };

    if (sentenceMap.has(numType)) {
        const r = sentenceMap.get(numType)
        if(r)
        line.text = r(poem.usedValues);
        poem.lines.push(line);
        console.log(`Created line ${i + 1}: `, line);
       }
  }
 // console.log("^^^^ Created Poem: ", poem);
  return poem;
};
