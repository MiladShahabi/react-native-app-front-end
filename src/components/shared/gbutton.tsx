import { Box, Text } from "@/utils/theme"
import { Pressable, Image } from "react-native"

type ButtonProps = {
  label: string
  onPress: () => void
  onLongPress?: () => void
  disabled?: boolean
  uppercase?: boolean
}

const GoogleSignButton = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <Box
        bg={disabled ? "gray800" : "lightGray"}
        py="3.5"
        borderRadius="rounded-7xl"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Image 
          source={require('../../image/google_icon.png')} 
          style={{ width: 18, height: 18, marginRight: 8 }} 
        />
        <Text
          variant="textXs"
          fontWeight="700"
          color="gray9"
          textAlign="center"
          textTransform={uppercase ? "uppercase" : "none"}
        >
          {label}
        </Text>
      </Box>
    </Pressable>
  )
}

export default GoogleSignButton