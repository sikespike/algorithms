function linearSearch(input, item) {
    for(var x=0;x<input.length;x++) {
        if(input[x] == item) {
            return x;
        }
    }

    return -1;
}