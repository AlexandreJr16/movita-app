export const valorMesParaNumero = (valorMes) => {
  const meses = {
    JAN: 0,
    FEV: 1,
    MAR: 2,
    ABR: 3,
    MAI: 4,
    JUN: 5,
    JUL: 6,
    AGO: 7,
    SET: 8,
    OUT: 9,
    NOV: 10,
    DEZ: 11,
  };

  return meses[valorMes] !== undefined ? meses[valorMes] : null;
};
