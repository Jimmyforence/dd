

 

let Players =[
    player1= {Nombre:"Jimmy ", Lvl:1 , MaxHp:20, currentHP:20 },
    player2= {Nombre:"Peps" , Lvl:1 , MaxHp:17, currentHP:10 },
    player3= {Nombre:"JimmyII" , Lvl:1 , MaxHp:10, currentHP:10 },
]
let hpvar1 = ((player1.currentHP/ player1.MaxHp )*(100))
console.log (hpvar1)

document.querySelector(".plus1").addEventListener("click", oneHealth, true);
console.log(player1.MaxHp)
function oneHealth(){
    if ( player1.currentHP==player1.MaxHp)
    {
        console.log("Vida a tope")
        document.querySelector(".p1Text").value = player1.currentHP
        document.getElementById("rect").style.width = hpvar1;
// esta madre ya funciona en logica pero no para cambiar el tamaño de la barra 

        console.log (hpvar1)

        return

    }
    else{
        player1.currentHP ++
        document.querySelector(".p1Text").value = player1.currentHP
        hpvar1 = player1.currentHP/ player1.MaxHp 
        document.getElementById("rect").style.width = "hpvar1 px";
        console.log (hpvar1)
        console.log (player1.currentHP)

    }

}document.querySelector(".min1").addEventListener("click", minHealth, true);


function minHealth (){
    if ( player1.currentHP==-10)
    {
        console.log("Muerto")
        document.querySelector(".p1Text").value = player1.currentHP
        return
    }
    else{
        player1.currentHP --
        document.querySelector(".p1Text").value = player1.currentHP
    }
}