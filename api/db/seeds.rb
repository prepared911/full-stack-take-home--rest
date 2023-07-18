nature_codes = ["911 Hang-Up", "Burglary", "Fire", "Wellness Check"]
nature_codes.each { |name| NatureCode.create(name: name) }

chatrooms = [
  {
    label: "Missed call",
    caller_phone_number: "12223334441",
    description: "Caller called 9-1-1 and hung up immediately. Follow-up.",
    nature_code: NatureCode.find_by(name: "911 Hang-Up")
  },
  {
    label: "Stolen Shoes",
    caller_phone_number: "12223334442",
    description: "Someone broke into a sneakerhead's apartment and stole his Jordans.",
    nature_code: NatureCode.find_by(name: "Burglary")
  },
  {
    label: "Fire on Broadway",
    caller_phone_number: "12223334443",
    description: "There's a fire on broadway, apparently caused by very intense dancing.",
    nature_code: NatureCode.find_by(name: "Fire")
  },
  {
    label: "Checking-up on my grandma",
    caller_phone_number: "12223334444",
    description: "Caller has requested a wellness check on their grandma.",
    nature_code: NatureCode.find_by(name: "Wellness Check")
  }
]
chatrooms.each do |params|
  Chatroom.create(
    label: params[:label],
    caller_phone_number: params[:caller_phone_number],
    description: params[:description],
    nature_code: params[:nature_code],
    resolved: false
  )
end
