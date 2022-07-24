#!/usr/bin/env bash

# Color files
PFILE="$HOME/.config/polybar/nordic/colors.ini"
RFILE="$HOME/.config/polybar/nordic/scripts/rofi/colors.rasi"

# Change colors
change_color() {
	# polybar
	sed -i -e "s/background = #.*/background = $BG/g" $PFILE
	sed -i -e "s/background-alt = #.*/background-alt = $BGA/g" $PFILE
	sed -i -e "s/foreground = #.*/foreground = $FG/g" $PFILE
	sed -i -e "s/foreground-alt = #.*/foreground-alt = $FGA/g" $PFILE
	sed -i -e "s/primary = #.*/primary = $AC/g" $PFILE
	
	# rofi
	cat > $RFILE <<- EOF
	/* colors */

	* {
	  al:   #00000000;
	  bg:   ${BG}FF;
	  bga:  ${BGA}FF;
	  fga:  ${FGA}FF;
	  fg:   ${FG}FF;
	  ac:   ${AC}FF;
	  se:   ${AC}40;
	}
	EOF
	
	polybar-msg cmd restart
}

if  [[ $1 = "--nordic" ]]; then
    BG="#393E4A"
	BGA="#444C5E"
	FGA="#E5E9F0"
	FG="#ECEFF4"
	AC="#8FBCBB"
	blue = "#81A1C1"
	green = "#8FBCBB"
	change_color
elif  [[ $1 = "--White" ]]; then
	BG="#FFFFFF"
	BGA="#E7E7E7"
	FGA="#2E2E2E"
	FG="#303030"
	AC="#8FBCBB"
	blue = "#CCCCCC"
	
	change_color
elif  [[ $1 = "--gruvbox" ]]; then
	BG="#282828"
	BGA="#EBDBB2"
	FGA="#EBDBB2"
	FG="#282828"
	AC="#757575"
	change_color
elif  [[ $1 = "--adapta" ]]; then
	BG="#243035"
	BGA="#38444A"
	FGA="#FDF6E3"
	FG="#FFFFFF"
	AC="#4DD0E1"
	change_color
elif  [[ $1 = "--Semi-nord" ]]; then
	BG="#5D636F"
	BGA="#6A6F78"
	FGA="#FFFFFF"
	FG="#FFFFFF"
	AC="#99A0AD"
	change_color
else
	cat <<- _EOF_
	No option specified, Available options:
	--nordic    --nord    --gruvbox    --adapta    --cherry
	_EOF_
fi
