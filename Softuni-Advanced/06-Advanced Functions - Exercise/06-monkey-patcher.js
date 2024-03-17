function result(args) {
  
  switch (args) {
    case "upvote": this.upvotes++
      break;
    case "downvote": this.downvotes++
      break;
    case "score": return score.call(this)
    debugger
      break;
  }

  function score() {
    let upvotes = this.upvotes
    let downvotes = this.downvotes

    let score = upvotes - downvotes
    let totalVotes = upvotes + downvotes
    let outputArray = [upvotes, downvotes, score, 'new']
    
    
    if (totalVotes > 50) {
      let numberToAdd = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
      outputArray[0] = outputArray[0] + numberToAdd
      outputArray[1] = outputArray[1] + numberToAdd
    }
    
    let isHot = upvotes / totalVotes > 0.66;
    
    if (isHot) {
      outputArray[3] = 'hot'
    } else if ((!isHot && score >= 0) && (upvotes > 100 || downvotes > 100)) {
      outputArray[3] = 'controversial'
    } else if (score < 0) {
      outputArray[3] = 'unpopular'
    } 
    if (totalVotes < 10) {
      outputArray[3] = 'new'
    }

    return outputArray
  }
}

var forumPost = {
  id: '2',
  author: 'gosho',
  content: 'whats up?',
  upvotes: 120,
  downvotes: 30
};

let answer = result.call(forumPost, 'score');
console.log(answer)
