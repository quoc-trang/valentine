const text = ['are you sure?', 'really sure?', 'think again!', 'last chance', 'surely not?', 'you might regret it', 'give it another thought', 'are you absolutely certain?', 'this could be a mistake!', 'have a heart!', `dont't be so cold`, 'change of heart?', `wouldn't you reconsider?`, 'is that your final answer?', `you're breaking my heart`, `you're breaking my heart:(`]
const yesUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHlwbWxxM2lwcWYzeHI5eHZ1eG96czhseWZuNHozMHU1bW93dTJtZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/giphy.gif'
const noBtn = document.querySelector('button.no')
const yesBtn = document.querySelector('button.yes')

noBtn.addEventListener('click', function(){
    const countText = text.length
    const randomIndex = Math.floor(Math.random() * countText)
    noBtn.textContent = text[randomIndex]
    yesBtn.style.width = yesBtn.offsetWidth + 20 + 'px'
    yesBtn.style.height = yesBtn.offsetHeight + 20 + 'px'
})

yesBtn.addEventListener('click', function(){
    yesBtn.style.display = 'none'
    noBtn.style.display = 'none'
    const dogImg = document.querySelector('img.dog-image')
    const textH1 = document.querySelector('h1.text')
    textH1.textContent = 'OkAY, YAY'
    dogImg.className = 'new-image'
    dogImg.src = yesUrl

})