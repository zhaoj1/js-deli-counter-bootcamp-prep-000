//katzDeliLine

function takeANumber(katzDeliLine,name){
  return `Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return katzDeliLine.shift()
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length > 0){
    var str = "The line is currently: "
    for(let i = 0; i < line.length;i++){
      str = str + (i+1) + ". " + line[i] + ", "
    }
    str = str.slice(0,-2)
  }
  else{
    str = "The line is currently empty."
  } 
  return str
}