from random import shuffle, randint


def get_shuffled_str(word: str) -> str:
    word_to_return = list(word)
    shuffle(word_to_return)
    return ''.join(word_to_return)


def word_from_end_mode(text: str) -> str:
    for i in text:
        if not i.isalpha() or i not in ".,?!\'\";:":
            text.replace(i, '')
        elif i == '\n':
            text.replace(i, '<br>')
    temp_text_list = text.split()
    for i in range(len(temp_text_list)):
        if temp_text_list[i][-1] in '.,: ;!?\'\"':
            temp_text_list[i] = temp_text_list[i][-2:0:-1] + temp_text_list[i][0] + temp_text_list[i][-1]
        else:
            temp_text_list[i] = temp_text_list[i][::-1]
    return ' '.join(temp_text_list)


def remove_vowels(text: str) -> str:
    text_with_no_vowels = ""
    for i in text:
        if i not in "уеыаоэяию":
            text_with_no_vowels += i

    return text_with_no_vowels


def shuffle_sentences_words(text: str) -> str:
    for i in text:
        if not i.isalpha() or i not in ".,?!\'\";:":
            text.replace(i, '')
        elif i in '\r\n':
            text.replace(i, '<br>')

    final_text = ''
    cur_words = list()
    for i in text.split():
        if i[-1] == '.':
            cur_words.append(i[:-1])
            shuffle(cur_words)

            l = len(cur_words)
            for j in range(l):
                if cur_words[j].lower() == 'но' or cur_words[j].lower() == 'а' and 0 < j < l:
                    cur_words[(j - 1) % len(cur_words)] += ','

            final_text += (' '.join(cur_words) + '. ').capitalize()
            cur_words.clear()

        elif i[-1] in ',:*-–':
            cur_words.append(i[:-1])
        else:
            cur_words.append(i)

    return final_text


def random_spaces(text: str) -> str:
    final_text = ''

    for i in text:
        if i.isalpha():
            final_text += i
            space = bool(randint(0, 1))
            if space:
                final_text += ' '

        elif i in ".,?!\'\";:":
            final_text += i
            space = bool(randint(0, 1))
            if space:
                final_text += ' '

    return final_text


def sentences_from_end(text: str) -> str:
    sentences = text.split('. ')

    print(sentences)
    return "В данный момент данный режим находится в разработке."


def random_register(text: str) -> str:
    final_text = ''

    for i in text:
        if not i.isalpha() or i not in ".,?!\'\";:":
            text.replace(i, '')
        elif i in '\r\n':
            text.replace(i, '<br>')

    for i in text:
        n = randint(0, 1)
        if n:
            final_text += i.lower()
        else:
            final_text += i.upper()

    return final_text


def remove_spaces(text: str) -> str:
    final_text = ""
    row_len = 0

    for i in text:
        if i not in '\r\n .,!?:;-':
            final_text += i
            row_len += 1

        if row_len == 80:
            final_text += '\n'
            row_len = 0

    return final_text


def anagramms_mode(text: str) -> str:
    final_text = ''

    for i in text:
        if i.isalpha() or i in ",\'\";:- " and i != '.':
            final_text += i
        elif i in ".!?":
            final_text += i + ' '

    text_list = final_text.split()

    for i in range(len(text_list)):
        if text_list[i][-1] in '.,: ;!?\'\"':
            text_list[i] = get_shuffled_str(text_list[i][:-1]) + text_list[i][-1]
        else:
            text_list[i] = get_shuffled_str(text_list[i])

    return ' '.join(text_list)


modes = {"Слова с конца": word_from_end_mode,
         "Убрать гласные": remove_vowels,
         "Перемешать слова": shuffle_sentences_words,
         "Случайные пробелы": random_spaces,
         "Предложения с конца": sentences_from_end,
         "Случайный регистр": random_register,
         "Убрать пробелы": remove_spaces,
         "Анаграмма": anagramms_mode}
