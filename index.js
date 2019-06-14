//katzDeliLine

function takeANumber(line,name){
  return `Welcome, ${name}. You are number ${line} in line.`
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
//
    for(let i = 0; i < line.length;i++){
      str + i + ". " + line[i] + ","
    }
  }
}