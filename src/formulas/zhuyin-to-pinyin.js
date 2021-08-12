const zhuyinToPinyin = {
    // Endings - put these first because these patterns are consistent
    // We want to have "ai" found before "a" and "i" separately
    ㄞ:	"ai",
    ㄟ: "ei",
    ㄠ: "ao",
    ㄡ: "ou",
    ㄢ: "an",
    ㄣ: "en",
    ㄤ: "ang",
    ㄥ: "eng",
    ㄦ: "er",
    // Starting sounds
    ㄓ:	"zh",
    ㄔ: "ch",
    ㄕ: "sh",
    // Multi-Sound
    ㄩ:	"ü", // Edge case
    ㄩ:	"yu",
    ㄧ: "yi", // Edge case
    ㄧ: "y", // yao
    //other
    ㄅ: "b",
    ㄆ: "p",
    ㄇ: "m",
    ㄈ: "f",
    ㄉ:	"d",
    ㄊ: "t",
    ㄋ:	"n",
    ㄌ:	"l",
    ㄍ:	"g",
    ㄎ:	"k",
    ㄏ: "h",
    ㄐ:	"j",
    ㄑ:	"q",
    ㄒ:	"x",
    ㄖ: "r",
    ㄗ: "z",
    ㄘ: "c",
    ㄙ:	"s",
    ㄧ: "i",
    ㄨ: "w",
    ㄚ: "a",
    ㄛ: "o",
    ㄜ:	"e",
    ㄝ:	"e"
}