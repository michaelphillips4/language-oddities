import {createPoem} from '../createPoem';
import {useEffect, useState } from 'react';
import WordCategories, {PoemInfo} from "../definitions" ;
import PoemDataSetInfo from "./PoemDatasetInfo";
import sentenceParts from '../data/SentenceParts.json';
import sentencePartsWild from '../data/SentencePartsWild.json';



function PoemGenerator() {
  
 const dataMap = new Map<string, WordCategories>();
       dataMap.set("Buddhist", sentenceParts);
       dataMap.set("Standard", sentencePartsWild);

const [poemInfo, setPoemInfo] = useState<PoemInfo>(createPoem(dataMap.get("Buddhist")!)); // Initialize to null, update after data loads
  
const [selectedKey, setSelectedKey] = useState("Buddhist"); // Default to first key
  
  const generatePoem = () => {
    const data = dataMap.get(selectedKey) || sentenceParts;
    const newPoem = createPoem(data);
    console.log("New poem created:", selectedKey, newPoem.lines);
    setPoemInfo(newPoem);
  };

  useEffect(() => {
    generatePoem();
  }, [selectedKey]);  



  return (
    <div>
      <button
        className="button"
        onClick={() => {
          generatePoem();
        }}
        disabled={!poemInfo} // Disable button until data loads
      >
        Create New
      </button>
      <blockquote>
        {poemInfo?.lines.map((s, index) => <div key={index}>{s.text}</div>)}
      </blockquote>

      <div>
        <label htmlFor="fileSelect">Choose a Poem Style: </label>
        <select
          id="fileSelect"
          value={selectedKey}
          onChange={(e) => {
               setSelectedKey(e.target.value); 
          }}
        >
          {[...dataMap.keys()].map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

       
      </div>

      {poemInfo && <PoemDataSetInfo poemInfo={poemInfo} />}
    </div>
  );
}

export default PoemGenerator;
