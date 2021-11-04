const express = require("express");
const Messages = require("../models/messages");
const router = express.Router();

router.post("/insertMessage/:recip_id/:time", (req, res) => {
  const{body}=req.body
  const sender = req.session.user_id;
  const recip=req.params.recip_id;
  const time=req.params.time;
  Messages.addMessages(body, sender, recip,time ).then(()=>{
    return res.json({ message: "You sent a message" });
  }

  )
});

router.get("/getMessages/:user_not_in_session", (req, res) => {
  const user_in_session=req.session.user_id
  const user_not_in_session = req.params.user_not_in_session
  Messages.getMessages(user_in_session,user_not_in_session).then((messageDetails) => {
    messageDetails;
    res.json(messageDetails);
  });
});

router.get("/user/:user_id", (req, res) => {
    user_id=req.params.user_id
    Messages.getUserByID(user_id).then((userData)=>{
        userData
        res.json(userData);
    })
});

router.get("/getAllMessages", (req, res)=>{
  user_id=req.session.user_id
  console.log(user_id)
  Messages.getAllMessags(user_id).then((allMessages)=>{
    console.log(allMessages)
    speakingTo=[]
    for(i of allMessages){
      if(i["sender_id"]===user_id){
        if(speakingTo.includes(i["recipient_id"])){
          continue;
        }else{
          speakingTo.push(i["recipient_id"])
        }
      }else if(i["recipient_id"]===user_id){
        if(speakingTo.includes(i["sender_id"])){
          continue;
        }else{
          speakingTo.push(i["sender_id"])
        }
      }
    }
    speakingTo
      res.json({array: speakingTo})
  })

})

module.exports = router;
