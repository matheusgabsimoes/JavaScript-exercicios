const valorTotalDosItens = ((2095 * 2) + (799 * 2)) / 100;
const freteManuseio = (499 * 2) / 100;
const totalSemTaxa = valorTotalDosItens + freteManuseio;
const estimativaDeTaxa = Math.round((totalSemTaxa * 0.1) * 100) / 100;

console.log(`Itens (${2 + 2}): $` + valorTotalDosItens);
console.log(`Frete & Manuseio: $` + freteManuseio);
console.log(`Total sem taxa: $` + totalSemTaxa);
console.log(`Estimativa de taxa(10%): $` + estimativaDeTaxa);
console.log(`Total da compra: $` + (totalSemTaxa + estimativaDeTaxa));