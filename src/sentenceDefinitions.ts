import {getRandFromArray,toSentenceCase} from "./helpers";
import WordCategories from "./definitions";

const simple = (data: WordCategories, usedValue: Map<string, string[]>) => 
`The ${getRandFromArray(data.adjective, "adjective", usedValue)}  
 ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValue)} 
 ${getRandFromArray(data.verb, "verb", usedValue)} 
 ${getRandFromArray(data.preposition,"preposition",usedValue)} 
 ${getRandFromArray(data.article, "article", usedValue)} 
 ${getRandFromArray(data.adjective, "adjective", usedValue)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValue)}`;

const simple1 = (data: WordCategories, usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.article, "article", usedValues)}  
 ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)}`;

const simple2 = (data: WordCategories, usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.proper_noun, "common_noun", usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)} 
 ${getRandFromArray(data.preposition,"preposition",usedValues)} 
 ${getRandFromArray(data.article,"article",usedValues)} 
 ${getRandFromArray(data.adjective,"adjective",usedValues)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValues)}`;

const simple3 = (data: WordCategories, usedValues: Map<string, string[]>) => 
`${getRandFromArray(data.article, "article", usedValues)} 
 ${getRandFromArray(data.common_noun,"common_noun",usedValues)} 
 ${getRandFromArray(data.verb,"verb",usedValues)} 
 ${getRandFromArray(data.preposition,"preposition",usedValues)} 
 ${getRandFromArray(data.article,"article",usedValues)} 
 ${getRandFromArray(data.concrete_noun,"concrete_noun",usedValues)}`;

const simple4 = (data: WordCategories, usedValues: Map<string, string[]>) =>
  simple(data, usedValues) + ", " + simple3(data, usedValues);

const simple5 = (data: WordCategories, usedValues: Map<string, string[]>) => {
  const noun = getRandFromArray(data.concrete_noun,"concrete_noun",usedValues);
  const f = "aeiou".includes(noun[0]) ? "An" : "A";
  return `${f} ${noun} ${getRandFromArray(data.verb, "verb", usedValues)}`;
};
   
 export const getSentenceMap = (data: WordCategories) => new Map<
    number,
    (usedValues: Map<string, string[]>) => string
  >([
    [0, (usedValues) => toSentenceCase(simple(data, usedValues) + ".")],
    [1, (usedValues) => toSentenceCase(simple1(data, usedValues) + ".")],
    [2, (usedValues) => toSentenceCase(simple2(data, usedValues) + ".")],
    [3, (usedValues) => toSentenceCase(simple3(data, usedValues) + ".")],
    [4, (usedValues) => simple4(data, usedValues) + "."],
    [5, (usedValues) => simple5(data, usedValues) + "."],
  ]);