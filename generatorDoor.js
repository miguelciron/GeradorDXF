import { DxfWriter, point3d } from "@tarikjabiri/dxf";
import fs, { writeFileSync } from 'node:fs';


const part = {
    width: 800,
    height: 450,
    diametroCaneca: 17.5,
    distanceBorderLateral: 5,
    distanceBorderSuperior: 110,
    guidance: "esquerda",
};

const calcDistanceBorderLateral = part.distanceBorderLateral + part.diametroCaneca;
const calcDistanceBorderSuperior = part.distanceBorderSuperior + part.diametroCaneca;


const dxf = new DxfWriter();
dxf.addLine( point3d(0, 0), point3d(part.width, 0));
dxf.addLine( point3d(part.width, 0),  point3d(part.width, part.height));
dxf.addLine( point3d(part.width, part.height), point3d(0, part.height));
dxf.addLine( point3d(0, part.height), point3d(0, 0));
dxf.addCircle(point3d(calcDistanceBorderSuperior, calcDistanceBorderLateral), part.diametroCaneca);



const arqName = 'porta-parametrica.dxf';
const dxfString = dxf.stringify();

try {
    fs.writeFileSync(arqName, dxfString, 'utf8');
    console.log('Arquivo salvo com sucesso!!');
} catch (erro) {
    console.error('Erro ao escrever o arquivo:', erro);
};


