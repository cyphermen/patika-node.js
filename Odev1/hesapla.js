function daireAlanı(r) {
    const pi = Math.PI;
    const alan = pi*r*r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`); 
}

let r = process.argv[2]

daireAlanı(r);