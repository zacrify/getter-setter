// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (num, bases) => {
    return {
      specimenNum: num,
      dna: bases,
      mutate() {
        // random Loc on DNA
        let i = Math.floor(Math.random() * this.dna.length);
  
        // target base's letter
        let oldBase = this.dna[i];
  
        // Swapping out (mutating) base on DNA
        let altBases = ['A', 'T', 'C', 'G'];
        altBases.splice(altBases.indexOf(oldBase), 1); // find and remove target base
        let mutatedBase = altBases[Math.floor(Math.random() * 3)]; // take one of 3 altBases
      
      //   console.log(`Changed ${oldBase} to ${mutatedBase} on number ${i}`);
        return this.dna.splice(i, 1, mutatedBase);   
      },
      compareDNA(otherPAqeour) {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == otherPAqeour.dna[i]) {
            count += 1;
          }
        }
        // console.log(`Specimen #${this.specimenNum} has ${count * 100/this.dna.length}% DNA bases in common with #${otherPAqeour.specimenNum}.`)
      },
      willLikelySurvive() {
        const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');
  
        if (cAndG.length/this.dna.length > 0.6) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
    // 30 instances
  let sample = [];
  let i = 0;
  while (sample.length < 30) {
    let temp = pAequorFactory(i, mockUpStrand());
    if (temp.willLikelySurvive() == true) {
      sample.push(temp);
      i += 1
    } 
  }

  console.log(pAequorFactory(1,mockUpStrand()).mutate())