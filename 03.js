function remove (string) {  
    let result = string;
  
  
    while (result[result.length - 1] === "!") {
  
      result = result.slice(0, -1);
    }
    return result;
  }