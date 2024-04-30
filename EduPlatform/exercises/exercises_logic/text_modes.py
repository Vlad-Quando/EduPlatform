from random import shuffle, randint


def word_from_end(text: str) -> str:
    final_text = ""
    cur_word = ""

    for i in text:
        if i.isalpha():
            cur_word += i
        else:
            if cur_word:
                final_text += cur_word[::-1] + i
                cur_word = ""
            else:
                final_text += i
    
    return final_text


def remove_vowels(text: str) -> str:
    text_with_no_vowels = ""
    for i in text:
        if i not in "уеыаоэяию":
            text_with_no_vowels += i

    return text_with_no_vowels


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
            shuffle(cur_sentence)
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


def random_spaces(text: str) -> str:
    final_text = ''

    for i in text:
        if i.isalpha():
            final_text += i
            space = bool(randint(0, 1))
            if space:
                final_text += ' '

        elif i in ".,?!\'\";:-—–":
            final_text += i
            space = bool(randint(0, 1))
            if space:
                final_text += ' '
        elif i == "\n":
            final_text += "<br>"

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


def random_register(text: str) -> str:
    final_text = ''
    
    for i in text:
        if i.isalpha():
            reg = randint(0, 1)
            if reg:
                final_text += i.upper()
            else:
                final_text += i.lower()
        else:
            final_text += i

    return final_text


def remove_spaces(text: str) -> str:
    final_text = ""

    for i in text:
        if i != " ":
            final_text += i

    return final_text


def anagramms(text: str) -> str:
    final_text = ''
    cur_word = ""

    for i in text:
        if i.isalpha():
            cur_word += i
        else:
            if cur_word:
                listed_word = list(cur_word)
                shuffle(listed_word)
                final_text += ''.join(listed_word) + i
                cur_word = ""
            else:
                final_text += i

    return final_text


modes = {"Слова с конца": word_from_end,
         "Убрать гласные": remove_vowels,
         "Перемешать слова": shuffle_sentences_words,
         "Случайные пробелы": random_spaces,
         "Предложения с конца": sentences_from_end,
         "Случайный регистр": random_register,
         "Убрать пробелы": remove_spaces,
         "Анаграмма": anagramms}
