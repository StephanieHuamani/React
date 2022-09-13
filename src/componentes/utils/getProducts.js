const products = [
    {id: 1,
        title: "Cuaderno Abstracto",
        price: 2540,
        category: "Cuaderno",
        stock: 9,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/libreta-geometrico1-c59610c21f67cf719016394891362721-1024-10241-8bd188d2bb562136d716570488066207-1024-1024.jpg",
    },
    {id: 2,
        title: "Cuaderno Harry Potter",
        price: 2990,
        category: "Cuaderno",
        stock: 13,
        img: "https://http2.mlstatic.com/D_NQ_NP_856176-MLA51356658839_082022-O.webp",
    },
    {
        id: 3,
        title: "Notas traslucidas Memo Fix",
        price: 340,
        category: "Librería",
        stock: 43,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/e6632729-3cd6-4ed3-93bb-fd1629853564_nube-266d81f1220da4d41e16220563118693-640-0.jpg",
    },
    {
        id: 4,
        title: "Cuaderno Mujer Maravilla",
        price: 2990,
        category: "Cuaderno",
        stock: 11,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/12462211-221d9f4f0b06c4d64016615315188037-1024-1024.jpg",
    },
    {
        id: 5,
        title: "Cuaderno Paprika",
        price: 1990,
        category: "Cuaderno",
        stock: 18,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/348/550/products/cuadernoa5_movimiento1-d1315947d5e3c0223d16391450367134-640-0.png",
    },
    {
        id: 6,
        title: "Lapiz portamina Pilot",
        price: 650,
        category: "Escritura",
        stock: 26,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/pilot-eno_11-2e0fb61aa222ae8e5916496904886832-640-0.jpg",
    },
    {
        id: 7,
        title: "Planificador ",
        price: 2540,
        category: "Cuaderno",
        stock: 21,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/planner-terrazo-con-iman1-f5df511c7e1f15cf0216307962604157-1024-1024.jpg",
    },
    {
        id: 8,
        title: "Sujeta papeles FW",
        price: 1200,
        category: "Librería",
        stock: 6,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/xlpazlvk1-4c0579c90a4356171f16590331699642-640-0.jpeg",
    },
    {
        id: 9,
        title: "Resaltadores Stabilo Swing Cool",
        price: 440,
        category: "Escritura",
        stock: 39,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/5c7defd4-e329-4018-a3a4-966781b0318d1-ff82f699b819b9864615596252428406-1024-1024.jpeg",
    },
    {
        id: 10,
        title: "Set de Washi tapes FW",
        price: 2150,
        category: "Librería",
        stock: 16,
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/891/147/products/huanc6zu1-1437eb55a5d4c6f7dc16590329104809-640-0.jpeg",
    }
]

const getProducts = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve (products);
        }, 2000);
    })
}

export default getProducts;