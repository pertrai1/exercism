#include "reverse_string.h"

namespace reverse_string {
    std::string reverse_string(std::string str)
    {
        int n = str.length();
        for (int i = 0; i < n / 2; i++)
            std::swap(str[i], str[n - i - 1]);
        return str;
    }
}
