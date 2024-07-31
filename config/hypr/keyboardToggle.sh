hyprctl \
  --batch "$(
    hyprctl devices -j |
      jq -r '.keyboards[] | .name' |
      while IFS= read -r keyboard; do
        printf '%s %s %s;' 'switchxkblayout' "${keyboard}" 'next'
      done
  )"

DATA=$(hyprctl devices -j | jq -r '.keyboards[] | .active_keymap' | head -n1 | cut -c1-2 | tr 'a-z' 'A-Z')

echo $DATA

if [[ $DATA = "PO" ]];
then
	notify-send "Keyboard layout switched to Polish" -t 1000 -i ~/.config/hypr/keyboard/0.png -a "Keyboard switcher"
else
	notify-send "Keyboard layout switched to English (GB)" -t 1000 -i ~/.config/hypr/keyboard/1.png -a "Keyboard switcher"
fi
