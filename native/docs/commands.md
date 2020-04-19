# Baythium Packer - CLI (Commands)

Likely you need to use shell aliases in order to invoke the script without a longer command line.

###### WITHOUT Path Specification

```bash
# Archive all files within a folder into the designated source path
bayp -s <source-path> -d <destination-path>

# Archive all files within a folder into the designated source path using OpenPGP standards. It allows you to encrypt and sign your vulnerable data with default options
bayp -s <source-path> -d <destination-path> -gpg

# Archive all files within a folder into the designated source path with the ability to exclude non-essential files
bayp -s <source-path> -d <destination-path> -e [<exclusion-file>|<exclusion-folder]

# Archive all fies within a folder into the designated source path with the ability to exclude non-essential files along with data encryption
bayp -s <source-path> -d <destination-path> -e [<exclusion-file>|<exclusion-folder] -gpg
```

###### WITH Path Specification

```bash
# Archive files using a description file (descriptor) that appoints all necessary specifications
bayp -f <objective-file-path>

bayp -f <objective-file-path> -g

bayp -f <objective-file-path> -g <group-name>
```

```bash
bayp -lg <your-group-name>

bayp -lg
```

```bash
bayp -gc <your-group-name>

bayp -gc
```

###### Misc

```bash
# Display a current version
bayp -v

bayp -h
```