import sys


def reverse_string(string_to_be_reversed):
    # vowels_filtered
    vowels = ''.join(
        filter(lambda character: character in 'aeiuo', string_to_be_reversed))
    reversed_result = ''
    filtered_vowels_index = -1  # -2

    for character in string_to_be_reversed:
        if character in vowels:
            reversed_result += vowels[filtered_vowels_index]
            filtered_vowels_index -= 1
        else:
            reversed_result += character

    return reversed_result


def main():
    string_to_be_reversed = sys.argv[1]
    result = reverse_string(string_to_be_reversed)
    print(result)


if __name__ == "__main__":
    main()
