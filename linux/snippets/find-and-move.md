find . -type f -name '\*.jpg' -mtime +90 -exec mv '{}' /mnt/nas/rigo/test ';'

find . -name "\*.tif" -type 'f' -size -160k -delete
