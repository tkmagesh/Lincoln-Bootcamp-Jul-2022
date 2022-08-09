
str = 'Qui labore Lorem ullamco esse adipisicing ad eu cupidatat commodo ea ullamco. Id et ad eu veniam consectetur. Ullamco ipsum sint proident amet do cupidatat cupidatat laboris mollit laborum ex irure non occaecat. Aliquip eu tempor nisi et qui non esse ad quis reprehenderit. Adipisicing adipisicing quis eu excepteur fugiat culpa et commodo exercitation exercitation. Deserunt duis labore officia nisi do nostrud anim laborum occaecat. Laborum Lorem reprehenderit sit aute ullamco fugiat nostrud adipisicing exercitation. Aute ex magna enim officia aliqua nostrud cupidatat.'

""" 
    Find the word size that occurs the most 
    Ex Output:
        5 letter words occurs the most with 15 occurrances    
"""

words = str.split(' ')
words_count_by_size = {}

for word in words:
    word_size = len(word)
    """
    if word_size not in words_count_by_size:
        words_count_by_size[word_size] = 0
    """
    words_count_by_size.setdefault(word_size, 0)
    words_count_by_size[word_size] += 1

print(words_count_by_size)

# find the size of the word with maximum occurances