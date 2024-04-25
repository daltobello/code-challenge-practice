function sortBallColor(balls) {

  let sortedBalls = {
    yellow: [],
    purple: [],
    blue: [],
    gray: []
  }

  for(let i = 0; i < balls.length; i++) {
    if(balls[i].color === 'yellow') {
      sortedBalls.yellow.push(balls[i])
    } else if (balls[i].color === 'purple') {
      sortedBalls.purple.push(balls[i])
    } else if(balls[i].color === 'blue') {
      sortedBalls.blue.push(balls[i])
    } else if(balls[i].color === 'gray') {
      sortedBalls.gray.push(balls[i])
    }
  }
 
  return sortedBalls.yellow.concat(sortedBalls.purple, sortedBalls.blue, sortedBalls.gray)
}

export default sortBallColor

/**
 Prompt: You’re given an array of 20 balls of different sizes and four different colors. Sort them into one array by color, ignoring the sizes.

 GOAL: sort the balls by color
 INPUT: an array of 20 objects, each representing a ball. the object has two properties. color: this can be one of four values: "yellow", "purple", "blue", or "gray".
size: this property can be ignored for this task.
 OUTPUT: a single array containing all 20 balls sorted by color.
 HOW:
 - make an object with 4 properties for each color. the value will be an empty array
 - loop over the balls array of objects 
    - if the current ball element is yellow add it to the yellow property
    - if the 

 */
