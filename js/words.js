let wordList = [
    {
        Guessword: "ruguo",
        word: "Rúguǒ",
        hint: "ถ้า",
        simplified_word :"如果"
    },
    {
        Guessword: "gandao",
        word: "Gǎndào",
        hint: "รู้สึก",
        simplified_word :"感到"
    },
    {
        Guessword: "gaoxing",
        word: "Gāoxìng",
        hint: "ดีใจ",
        simplified_word :"高兴"
    },
    {
        Guessword: "jiu",
        word: "Jiù",
        hint: "ก็",
        simplified_word :"就"
    },
    {
        Guessword: "pai",
        word: "Pāi",
        hint: "ตบ",
        simplified_word :"拍"
    },
    {
        Guessword: "kanqilai",
        word: "Kànqǐlái",
        hint: "ดูๆแล้ว",
        simplified_word :"看起来"
    },
    {
        Guessword: "a",
        word: "a",
        hint: "ล่ะ,นะ,เถอะ,สิ",
        simplified_word :"啊"
    },
    {
        Guessword: "xiaoxi",
        word: "Xiāoxī",
        hint: "ข่าว,ข่าวคราว",
        simplified_word :"消息"
    },
    {
        Guessword: "qiudui",
        word: "Qiúduì",
        hint: "ทีมฟุตบอล",
        simplified_word :"球队"
    },
    {
        Guessword: "ying",
        word: "Yíng",
        hint: "ชนะ",
        simplified_word :"赢"
    },
    {
        Guessword: "buzenmeyang",
        word: "Bùzěnmeyàng",
        hint: "ไม่ดีเท่าไหร่,งั้นๆ",
        simplified_word :"不怎么样"
    },
    {
        Guessword: "zenmele",
        word: "Zěnmeliǎo",
        hint: "เป็นอะไรไป",
        simplified_word :"怎么了"
    },
    {
        Guessword: "keyi",
        word: "Kěyǐ",
        hint: "สามารถ,ได้",
        simplified_word :"可以"
    },
    {
        Guessword: "fahua",
        word: "Fǎhuá",
        hint: "โกรธ",
        simplified_word :"发火"
    },
    {
        Guessword: "huai",
        word: "Huài",
        hint: "เลว,ไม่ดี",
        simplified_word :"坏"
    },
    {
        Guessword: "mei",
        word: "Méi",
        hint: "ไม่",
        simplified_word :"没"
    },
    {
        Guessword: "daomei",
        word: "Dǎoméi",
        hint: "โชคร้าย,เคราะห์ร้าย",
        simplified_word :"倒霉"
    },
]

for(let k=0 ; k < wordList.length ; k++){
    document.getElementById('word_get').innerHTML += `<tr><td>${wordList[k]['simplified_word']}</td>
    <td>${wordList[k]['word']}</td><td>${wordList[k]['hint']}</td></tr>`;
}