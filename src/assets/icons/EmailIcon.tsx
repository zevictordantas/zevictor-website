import { Icon, type IconProps } from '@chakra-ui/icon'

export const EmailIcon = (props: IconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      fill-rule="evenodd"
      {...props}
    >
      <path
        d="M4.6 18V8.33l6.528 5.488c.223.188.497.282.772.282.266 0 .532-.088.752-.265L19.6 8.246V18h-15zM18.564 6l-6.647 5.346L5.559 6h13.005zM21.1 3h-18c-.829 0-1.5.672-1.5 1.5v15c0 .829.671 1.5 1.5 1.5h18c.829 0 1.5-.671 1.5-1.5v-15c0-.828-.671-1.5-1.5-1.5z"
        transform="translate(-420 -243) translate(410 235) translate(10 8)"
      />
    </Icon>
  )
}
