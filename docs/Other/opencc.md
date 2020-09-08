ocd和text转换
```
opencc_dict -h

Usage:

   opencc_dict  -i <file> -o <file> -f <text|ocd> -t <text|ocd> [--]
                [--version] [-h]

Options:

   -i <file>,  --input <file>
     (required)  Path to input dictionary

   -o <file>,  --output <file>
     (required)  Path to output dictionary

   -f <text|ocd>,  --from <text|ocd>
     (required)  Input format

   -t <text|ocd>,  --to <text|ocd>
     (required)  Output format

   --,  --ignore_rest
     Ignores the rest of the labeled arguments following this flag.

   --version
     Displays version information and exits.

   -h,  --help
     Displays usage information and exits.


   Open Chinese Convert (OpenCC) Dictionary Tool
```
```
opencc_dict -i TWVariants.ocd -o tw.text -f ocd -t text
```