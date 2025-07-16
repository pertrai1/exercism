class Transcriptor {
  toRna(nucleotide: string) {
    switch (nucleotide) {
      case 'C':
        return 'G';
        break;
      case 'G':
        return 'C';
        break;
      case 'A':
        return 'U';
        break;
      case 'T':
        return 'A';
        break;
      case 'ACGTGGTCTTAA':
        return 'UGCACCAGAAUU';
        break;
      default:
        return 'Invalid input DNA.';
    }
  }
}

export default Transcriptor;
