function sort(tab){

    var min_index;
    var swap;
    var i,j;
    
    for(i=0; i < tab.length-1;i++){
    
        min_index = i;
    
        for(j=i+1; j < tab.length;j++){
        
        if(tab[j] < tab[min_index]){
            min_index = j;
        }
        }
    
        swap = tab[i];
        tab[i] = tab[min_index];
        tab[min_index] = swap;  
    }
    
    return tab;
}