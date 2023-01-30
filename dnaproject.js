// Returns a random DNA base

const returnRandBase = (num) => {
    const dnaBases4 = ['A', 'T', 'C', 'G']
    const dnaBases3 = ['T', 'C', 'G']
    if(num === 4) {
      return dnaBases4[Math.floor(Math.random() * 4)]
    } else { 
      return dnaBases3[Math.floor(Math.random() * 3)]
    }
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = (num) => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase(num))
    }
    return newStrand
  }
  
  // console.log(returnRandBase());
  // console.log(mockUpStrand(3));
  // const xx = mockUpStrand(4);
  // console.log(xx[0]);
  
  function pAequorFactory(num, array) {
    // console.log(array);
    return {
      specimenNum: num,
      dna: array,
      mutate() {
        this.dna;
        console.log(this.dna);
        if(this.dna[0] === 'A') {
            this.dna[0] = returnRandBase(3);
        //   console.log(sourceDNA);
          return this.dna;
        } else {
        //   console.log(sourceDNA);  
          return this.dna;
        }
      },
      compareDNA(pAequor) {
        // let sameBase = 0;
        // for (let i = 0; i < this.dna.length; i++) {
        //     if (this.dna[i] === pAequor[i]) {        
        //        sameBase++; 
        //     }
        // }
        // const percentSimilarity = sameBase * 100 / this.dna.length;
        
        console.log(pAequor);
        console.log(this.dna);
        const sameBase = this.dna.filter((el,i) => {
            return el === pAequor[i];
        });
        console.log(sameBase);
        const percentSimilarity = parseFloat(sameBase.length * 100 / pAequor.length).toFixed(2);
        console.log(percentSimilarity);
        return `specimen #1 and specimen #2 have ${percentSimilarity}% DNA in common`;
      },
      willLikelySurvive() {
        const y = this.dna.reduce((acc,cr) => {
            if (acc[cr]) {
                ++acc[cr];
            } else {
                acc[cr] = 1;
            }     
        return acc;
        } ,[]);
        const GC = y['G'] + y['C'];
        if (GC * 100 / this.dna.length < 60) {
            return false;

        } else {
            return true;
        }
      },
      complementStrand() {
        console.log(this.dna);
        return this.dna.map(el => {
            switch (el) {
                case 'A':
                    return 'T';
                    break;
                case 'T':
                    return 'A';
                    break;
                case 'C':
                    return 'G';
                    break;
                case 'G':
                    return 'C';
                    break;
            }
        })
    },  

  
    }
  }
  
//   console.log(pAequorFactory(1, mockUpStrand(4)));
//   console.log(pAequorFactory(1, mockUpStrand(4)).mutate());
//   console.log(pAequorFactory(1, mockUpStrand(4)).complementStrand());
// pAequorFactory(1, mockUpStrand(4)).mutate();
  

const x = [
    'G', 'C', 'A', 'G',
    'G', 'T', 'C', 'T',
    'C', 'T', 'A', 'T',
    'G', 'G', 'G'
  ]

console.log(pAequorFactory(1, mockUpStrand(4)).compareDNA(x));
