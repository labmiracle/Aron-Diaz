let count = 0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
        default: return 0;
        
    }


    return count > 0 ? count + " Bet" : count + " Hold";
}




cc(2); cc(3); cc(7); cc("K"); cc("A");
console.assert(cc(4));