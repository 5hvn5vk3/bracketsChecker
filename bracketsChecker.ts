const isValid = (s: string): boolean => {
    while (s.length !== 0) { // while文で閉じていない括弧を検出
      if (!(s.includes("()")) && !(s.includes("[]")) && !(s.includes("{}"))) {
        return false;
      } else{ // 閉じた括弧は除去してゆく
        try {
            s = s.replaceAll("()", "");
            s = s.replaceAll("[]", "");
            s = s.replaceAll("{}", "");
        } catch (e) { // ES2021で追加されたreplaceAllがない場合（書かなくてもいいかもしれない）
            s = s.replace("()", "");
            s = s.replace("[]", "");
            s = s.replace("{}", "");
        };
      };
    };
    return true; // 文字列の長さが0となった場合　true
};

// Test cases
let s: string = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false