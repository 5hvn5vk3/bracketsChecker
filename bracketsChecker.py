def isValid(s: str) -> bool:
  while len(s) != 0: # while文で閉じていない括弧を検出
    if (not "()" in s) and (not "[]" in s) and (not "{}" in s):
      return False
    else: # 閉じた括弧は除去してゆく
      s = s.replace("()", "")
      s = s.replace("[]", "")
      s = s.replace("{}", "")
  return True # 文字列の長さが0となった場合　True

# Test cases
s = '()'
print(isValid(s)) # True
s = '({)}'
print(isValid(s)) # False