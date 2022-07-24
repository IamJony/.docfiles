#!/usr/bin/env bash

SDIR="$HOME/.config/polybar/nordic/scripts"

# Launch Rofi
MENU="$(rofi -no-config -no-lazy-grab -sep "|" -dmenu -i -p '' \
-theme $SDIR/rofi/styles.rasi \
<<< " Default| White| Gruvbox| Adapta| Semi-nord|")"
            case "$MENU" in
				*Default) "$SDIR"/styles.sh --default ;;
				*White) "$SDIR"/styles.sh --White ;;
				*Gruvbox) "$SDIR"/styles.sh --gruvbox ;;
				*Adapta) "$SDIR"/styles.sh --adapta ;;
				*Semi-nord) "$SDIR"/styles.sh --Semi-nord ;;
            esac
