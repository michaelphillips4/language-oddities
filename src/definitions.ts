export type PoemInfo = {
  numberOfLines: number,
  lines: LineInfo[],
  usedValues: Map<string, string[]>,
  allData:WordCategories
} 

export type LineInfo = {
  text: string,
  type: number,
} 

interface WordCategories {
    article: string[];
    verb: string[];
    adjective: string[];
    preposition: string[];
    common_noun: string[];
    proper_noun: string[];
    concrete_noun: string[];
}
export default WordCategories;