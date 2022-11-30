



let Players =[
    player1= {Nombre:Jimmy , Lvl:1 , MaxHp:20, currentHP:20 },
    player2= {Nombre:Peps , Lvl:1 , MaxHp:17, currentHP:10 },
    player3= {Nombre:JimmyII , Lvl:1 , MaxHp:10, currentHP:10 },
]


Document.queryselector('plus1').addeventlistener("click", oneHealth, true);
console.log(player1.MaxHp)
function oneHealth(){
    if ( player1.currentHP==player1.MaxHp)
    {
        console.log("Vida a tope")
        return
    }
    else{
        player1.currentHP ++
    }

}

// this is a comment to see if I can ex
