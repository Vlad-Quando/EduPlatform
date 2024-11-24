import random


def word_from_end(text: str) -> str:

    start_word = None
    result: str = ''

    for i in range(len(text)):
        if text[i].isalpha():
            if start_word is None:
                start_word = i
        else:
            if start_word is not None:
                result += text[start_word:i][::-1] + text[i]
                start_word = None
            else:
                result += text[i]
    
    return result


def remove_vowels(text) -> str:

    result: str = ''
    for i in text:
        if i not in 'аяоеуэюиы':
            result += i
    
    return result


def random_spaces(text: str) -> str:

    result: str = ''

    for i in text:
        if not i == ' ':
            result += i + random.choice(['', '', ' '])
    
    return result


def random_register(text: str) -> str:

    result: str = ''

    for i in text:
        result += random.choice([i.upper(), i.lower()])
    
    return result


def random_register_spaces(text: str) -> str:

    result: str = ''

    for i in text:
        if not i == ' ':
            result += random.choice([i.upper(), i.lower()])
            result += random.choice(['', '', ' '])
    
    return result


def remove_spaces(text: str) -> str:

    result: str = ''

    for i in text:
        if not i == ' ':
            result += i
    
    return result


def annagrams(text: str) -> str:
    start_word = None
    result: str = ''

    for i in range(len(text)):
        if text[i].isalpha():
            if start_word is None:
                start_word = i
    
        else:
            if start_word is not None:
                word_list = list(text[start_word:i])
                random.shuffle(word_list)
                result += ''.join(word_list) + text[i]

                start_word = None
            else:
                result += text[i]
    
    return result


def shuffle_sentences_words(text: str) -> str:
    final_text = ""

    cur_word = ""
    cur_sentence = list()

    for i in text:
        if i.isalpha():
            cur_word += i
        elif i == " ":
            if cur_word:
                cur_sentence.append(cur_word)
                cur_word = ""
        elif i in ",.:?\"\'»«":
            cur_sentence.append(cur_word)
            random.shuffle(cur_sentence)
            if final_text:
                if len(cur_sentence) == 1:
                    final_text += cur_sentence[0]
                else:
                    if final_text[-1] != "\n":
                        final_text += ' ' + ' '.join(cur_sentence) + i
                    else:
                        final_text += ' '.join(cur_sentence) + i
            else:
                final_text += ' '.join(cur_sentence) + i
            cur_sentence.clear()
            cur_word = ""
        elif i == "\n":
            final_text += i
    
    return final_text


def sentences_from_end(text: str) -> str:
    final_text = ""

    cur_word = ""
    cur_sentence = list()

    for i in text:
        if i.isalpha():
            cur_word += i
        elif i == " ":
            if cur_word:
                cur_sentence.append(cur_word)
                cur_word = ""
        elif i in ",.:?\"\'»«":
            cur_sentence.append(cur_word)
            cur_sentence = cur_sentence[::-1]
            if final_text:
                if len(cur_sentence) == 1:
                    final_text += cur_sentence[0]
                else:
                    if final_text[-1] != "\n":
                        final_text += ' ' + ' '.join(cur_sentence) + i
                    else:
                        final_text += ' '.join(cur_sentence) + i
            else:
                final_text += ' '.join(cur_sentence) + i
            cur_sentence.clear()
            cur_word = ""
        elif i == "\n":
            final_text += i
    
    return final_text


modes = {"Слова с конца": word_from_end,
         "Убрать гласные": remove_vowels,
         "Перемешать слова": shuffle_sentences_words,
         "Случайные пробелы": random_spaces,
         "Случайные регистры и пробелы": random_register_spaces,
         "Предложения с конца": sentences_from_end,
         "Случайный регистр": random_register,
         "Убрать пробелы": remove_spaces,
         "Анаграмма": annagrams}
