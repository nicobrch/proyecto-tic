// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              version="1"
              viewBox="0 0 375 375"
            >
              <defs>
                <clipPath id="id1">
                  <path d="M69.191 69.191h236.25v236.25H69.191zm0 0"></path>
                </clipPath>
                <clipPath id="id2">
                  <path d="M92.324 92.324h190.5v190.5h-190.5zm0 0"></path>
                </clipPath>
                <clipPath id="id3">
                  <path d="M145 123.535h88.39v138H145zm0 0"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#a887b0"
                  d="M187.316 69.191c-65.238 0-118.125 52.887-118.125 118.125 0 65.239 52.887 118.125 118.125 118.125 65.239 0 118.125-52.886 118.125-118.125 0-65.238-52.886-118.125-118.125-118.125"
                ></path>
              </g>
              <g clipPath="url(#id2)">
                <path
                  fill="#231f20"
                  d="M96.156 198.762a90.108 90.108 0 002.02 10.937l-3.051.762c-.895-3.719-1.613-7.531-2.063-11.297zm2.38 22.683c1.343 3.59 2.956 7.086 4.75 10.493l2.78-1.481c-1.703-3.273-3.273-6.68-4.574-10.133zm183.593-45.55a94.463 94.463 0 00-2.063-11.297l-3.046.761a90.857 90.857 0 012.015 10.938zM109.25 241.758c2.152 3.137 4.574 6.187 7.082 9.054l2.332-2.062a91.864 91.864 0 01-6.86-8.742zm55.594 38.332c3.722.898 7.531 1.613 11.297 2.062l.359-3.14a98.206 98.206 0 01-10.938-1.973zm-40.352-21.16a91.338 91.338 0 009.059 7.082l1.793-2.602a90.625 90.625 0 01-8.742-6.86zm-.133-142.575c-2.87 2.512-5.605 5.29-8.117 8.114l2.332 2.062a107.73 107.73 0 017.848-7.844zm-28.875 71.243c0-3.676.227-7.399.672-11.032l-3.136-.355a95.62 95.62 0 00-.672 11.387v.09h3.136zm69.942-89.446l-.762-3.047a86.64 86.64 0 00-10.984 3.45l1.12 2.918a97.579 97.579 0 0110.626-3.32zm-20.758 7.891l-1.48-2.777a104.078 104.078 0 00-9.817 5.96l1.793 2.602a97.222 97.222 0 019.504-5.785zm-32.953 29.277l-2.602-1.793a99.13 99.13 0 00-5.96 9.864l2.78 1.48c1.747-3.273 3.676-6.5 5.782-9.55zm-10.313 19.684l-2.914-1.121c-1.343 3.586-2.508 7.262-3.406 10.984l3.047.762a87.834 87.834 0 013.273-10.625zm41.965 116.973a92.26 92.26 0 0010.492 4.707l1.121-2.914a85.324 85.324 0 01-10.132-4.575zm128.496-128.809l-2.781 1.477a85.608 85.608 0 014.574 10.132l2.914-1.12c-1.3-3.587-2.914-7.13-4.707-10.489zm-8.43 96.75l2.602 1.793c2.195-3.137 4.168-6.457 5.961-9.816l-2.777-1.48c-1.75 3.226-3.676 6.456-5.785 9.503zM176.009 93.043l.36 3.094a91.718 91.718 0 0111.116-.672v-3.14c-3.855 0-7.71.222-11.476.718zm97.738 127.191l2.914 1.121c1.344-3.585 2.512-7.261 3.406-10.984l-3.046-.762a87.834 87.834 0 01-3.274 10.625zm-25.062 36.274l2.062 2.332a99.423 99.423 0 008.113-8.117l-2.328-2.063a80.88 80.88 0 01-7.847 7.848zm31.023-69.137v.18c0 3.722-.223 7.445-.672 11.12l3.094.36c.45-3.77.672-7.625.672-11.48v-.18zm-20.89-63.078l-2.376 2.105a92.861 92.861 0 016.86 8.743l2.597-1.793c-2.152-3.137-4.57-6.188-7.082-9.055zM209.68 277.039l.761 3.05c3.72-.898 7.395-2.062 10.985-3.405l-1.121-2.914a107.755 107.755 0 01-10.625 3.27zM198.918 92.996l-.36 3.14A99.347 99.347 0 01209.5 98.11l.762-3.093a96.85 96.85 0 00-11.344-2.02zm-11.254 186.692v3.136c3.813 0 7.711-.222 11.477-.672l-.36-3.093a102.96 102.96 0 01-11.117.628zm33.582-181.266l-1.121 2.914a85.324 85.324 0 0110.133 4.574l1.433-2.781a91.707 91.707 0 00-10.445-4.707zm20.356 10.672l-1.797 2.597c3.05 2.11 6.007 4.395 8.746 6.86l2.058-2.328a85.927 85.927 0 00-9.007-7.13zm-11.165 160.054l1.477 2.782c3.363-1.793 6.684-3.766 9.82-5.961l-1.793-2.602c-3.05 2.106-6.234 4.078-9.504 5.781zm0 0"
                ></path>
              </g>
              <path
                fill="#f5f4f6"
                d="M232.785 169.016c-.644 31.894-12.12 92.496-45.183 91.828-33.063-.664-42.086-61.676-41.446-93.574.645-31.899 20.278-43.516 44.2-43.036 23.921.485 43.07 12.88 42.43 44.782"
              ></path>
              <g clipPath="url(#id3)">
                <path
                  fill="#231f20"
                  d="M232.785 169.016l-.62-.016c-.317 15.8-3.313 38.719-10.282 57.613-3.48 9.45-7.957 17.89-13.54 23.93-2.792 3.02-5.859 5.441-9.214 7.11a24.4 24.4 0 01-10.988 2.577c-.176 0-.352 0-.532-.003-3.902-.079-7.453-1.016-10.695-2.664-5.672-2.883-10.414-7.958-14.324-14.438-5.867-9.71-9.844-22.55-12.332-35.625-2.496-13.07-3.516-26.379-3.516-37.035 0-1.09.012-2.153.031-3.184.16-7.754 1.446-14.277 3.633-19.699 3.29-8.125 8.59-13.785 15.235-17.445 6.644-3.657 14.648-5.297 23.3-5.297.465 0 .934.004 1.403.012 11.668.238 22.12 3.328 29.644 10.101 3.762 3.39 6.805 7.703 8.914 13.074 2.106 5.371 3.278 11.809 3.278 19.438 0 .504-.004 1.02-.016 1.539l.621.012.613.007c.012-.523.02-1.043.02-1.558 0-7.754-1.195-14.348-3.367-19.887-3.258-8.312-8.738-14.242-15.621-18.101-6.887-3.868-15.164-5.68-24.063-5.86a87.097 87.097 0 00-1.426-.012c-5.87 0-11.476.743-16.601 2.356-7.684 2.422-14.293 6.82-19.012 13.594-4.723 6.773-7.55 15.886-7.789 27.703-.023 1.039-.031 2.11-.031 3.207 0 16.36 2.375 38.836 8.773 57.375 3.207 9.27 7.414 17.558 12.883 23.61 2.738 3.023 5.79 5.488 9.188 7.214 3.398 1.727 7.144 2.715 11.234 2.797.184.004.371.004.555.004 4.175.004 8.023-.961 11.539-2.707 6.152-3.059 11.28-8.48 15.535-15.297 6.375-10.223 10.805-23.606 13.707-37.047 2.902-13.441 4.266-26.937 4.476-37.387l-.613-.011"
                ></path>
              </g>
              <path
                fill="#231f20"
                d="M221.168 166.285c-.54 21.211-11.742 24.328-20.688 31.293-4.601 3.586-18.453 9.457-22.039 21.942-2.328 8.109-1.355 30.437-1.257 34.703 0 0-5.41-23.676.324-37.403 5.738-13.73 19.148-18.582 11.953-18.273-27.691 1.191-31.715-26.715-31.715-32.262 0-17.676 8.293-32 31.711-32 17.516 0 31.711 14.324 31.711 32"
              ></path>
              <path
                fill="#f5f4f6"
                d="M219.598 165.04h-.04c-.644-16.216-13.87-29.165-30.101-29.165-15.96 0-29.016 12.531-30.055 28.375l-.074-.004a3.687 3.687 0 00-3.691 3.684 3.687 3.687 0 004.156 3.652c2.484 14.266 14.816 25.11 29.664 25.11 14.582 0 26.746-10.454 29.531-24.34.2.035.403.054.61.054a3.686 3.686 0 003.687-3.683 3.686 3.686 0 00-3.687-3.684"
              ></path>
              <path
                fill="#231f20"
                d="M219.598 165.04l-.02-.415-.035.004.016.41.414-.016c-.657-16.433-14.063-29.558-30.516-29.558-16.18 0-29.414 12.7-30.465 28.758l.41.027.024-.41-.078-.008h-.02a4.1 4.1 0 00-4.101 4.098 4.1 4.1 0 004.101 4.097c.18 0 .356-.015.516-.039l-.051-.406-.406.07c2.52 14.457 15.015 25.45 30.07 25.45 14.785 0 27.113-10.594 29.938-24.668l-.407-.082-.066.41c.215.031.437.054.676.054a4.097 4.097 0 100-8.191h-.02l.02.414v.41c.906 0 1.722.363 2.316.957.594.594.961 1.41.961 2.317 0 .906-.367 1.718-.96 2.312-.595.594-1.411.961-2.317.961-.18 0-.36-.02-.543-.05a.411.411 0 00-.47.327c-2.75 13.696-14.745 24.008-29.128 24.004-14.64.004-26.805-10.691-29.258-24.765a.419.419 0 00-.46-.34 2.99 2.99 0 01-.41.031 3.258 3.258 0 01-2.317-.957 3.262 3.262 0 01-.961-2.316 3.275 3.275 0 013.277-3.273v-.41l-.023.41.074.003a.413.413 0 00.434-.383c1.023-15.632 13.906-27.992 29.644-27.988 16.004-.004 29.05 12.77 29.691 28.766.004.113.051.21.133.285a.387.387 0 00.297.11h.035l-.015-.41v.41-.41"
              ></path>
              <path
                fill="#f5f4f6"
                d="M159.191 170.238c-.14 0-.277-.027-.402-.082a.82.82 0 01-.465-.484c-.14-.402.047-.871.172-1.113.223-.438.465-.696 1.027-.7h.11c.668-.004 1.582-.011 1.77-.672.085-.292-.075-.55-.477-.769-1.047-.574-3.176-.57-3.57-.125l-.258-.227c.535-.605 2.851-.574 3.992.047.547.301.773.711.644 1.164-.257.91-1.367.918-2.097.926h-.11c-.394 0-.535.137-.722.512-.172.332-.227.637-.157.844a.491.491 0 00.282.285c.351.16.941-.078 1.23-.395l.07-.074.098.023c.215.047.274.211.305.297l.027.067-.16.304a.433.433 0 01-.191-.254l-.008-.019c-.274.234-.707.445-1.11.445"
              ></path>
              <path
                fill="#231f20"
                d="M159.191 170.238v-.207a.781.781 0 01-.32-.062c-.187-.09-.293-.203-.351-.364a.716.716 0 01-.04-.242c-.003-.258.114-.543.2-.71.105-.212.207-.352.328-.442.117-.09.265-.145.52-.145l.109-.004c.332 0 .742 0 1.113-.093.184-.047.363-.117.516-.235a.926.926 0 00.367-.695.747.747 0 00-.172-.46 1.455 1.455 0 00-.434-.345c-.609-.328-1.484-.468-2.254-.468-.343 0-.664.027-.93.086-.269.062-.488.14-.64.308l.152.133.137-.152-.258-.227-.136.152.156.137c.078-.094.281-.2.555-.266.273-.066.62-.101.988-.101.777-.004 1.656.164 2.195.457.203.113.348.238.438.36a.617.617 0 01.105.57.821.821 0 01-.27.425c-.183.157-.449.25-.745.297-.293.047-.61.047-.887.051h-.106c-.218 0-.41.043-.562.16-.153.114-.246.27-.348.465a1.75 1.75 0 00-.207.738c0 .09.012.184.043.27.063.18.207.32.39.402.11.047.231.067.348.067.207 0 .418-.055.614-.149.195-.09.37-.215.507-.363l.07-.07-.152-.141-.046.203.097.02c.063.015.082.035.106.062.02.028.035.063.05.106l.004.015.032.063.187-.082-.183-.098-.16.305.183.097.098-.183-.055-.051-.04-.09-.003-.008-.008-.02a.21.21 0 00-.144-.124.2.2 0 00-.18.047c-.238.207-.645.398-.977.394v.41c.473-.004.934-.23 1.243-.496l-.133-.152-.192.074.008.024.192-.078-.196.07c.016.035.035.101.082.168.043.07.114.144.211.195a.205.205 0 00.278-.086l.16-.305a.221.221 0 00.004-.18l-.028-.062-.187.082.195-.066c-.02-.043-.047-.133-.117-.223a.608.608 0 00-.34-.21l-.098-.02a.204.204 0 00-.195.058l-.066.075c-.09.097-.23.199-.383.27-.149.07-.313.108-.438.108a.43.43 0 01-.175-.03h-.004c-.106-.052-.14-.098-.168-.169a.357.357 0 01-.02-.129c0-.136.051-.336.16-.55.094-.18.164-.278.227-.325.062-.047.14-.074.316-.078h.11c.367 0 .843 0 1.281-.129.223-.062.434-.16.617-.316a1.232 1.232 0 00.442-.926c0-.222-.079-.441-.215-.625a1.697 1.697 0 00-.57-.476c-.641-.348-1.563-.508-2.395-.512-.395 0-.77.039-1.086.117-.32.078-.586.191-.766.395a.188.188 0 00-.05.148c0 .055.027.106.07.14l.258.227c.086.074.21.067.289-.02.031-.042.187-.128.418-.175.226-.05.523-.078.843-.078.715 0 1.555.144 2.055.422a.992.992 0 01.313.238.319.319 0 01.078.203l-.012.09a.535.535 0 01-.187.277c-.141.106-.36.176-.61.207-.25.035-.527.035-.777.04h-.11c-.312.003-.566.077-.765.23-.196.148-.328.351-.446.582-.101.2-.242.527-.246.898 0 .121.02.25.063.375.094.27.3.485.574.602.156.074.324.101.488.101v-.203M203.078 168.723c0 1.691-1.047 3.062-2.34 3.062-1.289 0-2.336-1.37-2.336-3.062 0-1.692 1.047-3.063 2.336-3.063 1.293 0 2.34 1.371 2.34 3.063M180.516 168.723c0 1.691-1.047 3.062-2.34 3.062-1.29 0-2.336-1.37-2.336-3.062 0-1.692 1.047-3.063 2.336-3.063 1.293 0 2.34 1.371 2.34 3.063M189.457 186.52a8.39 8.39 0 01-7.469-4.555.512.512 0 01.219-.692.513.513 0 01.695.22 7.367 7.367 0 006.555 3.995 7.364 7.364 0 006.559-3.996.513.513 0 01.695-.219c.25.13.351.442.219.692a8.397 8.397 0 01-7.473 4.555"
              ></path>
              <path
                fill="#f5f4f6"
                d="M219.734 171.031c-.402 0-.836-.21-1.109-.449l-.008.023a.426.426 0 01-.195.254l-.156-.308.027-.063c.031-.086.09-.25.305-.297l.097-.023.067.074c.293.317.879.555 1.234.395a.491.491 0 00.281-.285c.07-.207.016-.512-.156-.844-.203-.399-.36-.512-.723-.512l-.109-.004c-.734-.004-1.844-.012-2.101-.922-.125-.453.101-.867.644-1.164 1.145-.625 3.457-.652 3.992-.047l-.258.227c-.394-.445-2.523-.45-3.57.121-.398.219-.559.48-.476.77.19.664 1.105.671 1.773.671h.11c.562.008.8.266 1.023.704.125.242.312.71.176 1.113-.075.215-.235.375-.465.48a.943.943 0 01-.403.086"
              ></path>
              <path
                fill="#231f20"
                d="M219.734 171.031v-.207c-.332.004-.738-.187-.976-.398a.215.215 0 00-.188-.043.208.208 0 00-.14.133l-.008.02c-.016.034-.024.066-.04.089l-.054.05.094.184.183-.097-.156-.305-.183.094.191.082.023-.063.008-.011a.284.284 0 01.051-.11c.02-.023.043-.043.106-.058l.097-.024-.047-.199-.152.137.066.074c.137.148.317.273.512.363.191.09.402.149.61.149.12 0 .238-.02.347-.067h.004a.713.713 0 00.39-.406.875.875 0 00.04-.266c0-.23-.075-.48-.203-.738-.11-.21-.215-.367-.368-.48-.156-.11-.34-.145-.543-.145l-.109-.004c-.363 0-.809-.004-1.172-.11a1.252 1.252 0 01-.46-.234.863.863 0 01-.27-.425.641.641 0 01.105-.57c.09-.122.238-.247.438-.36.543-.293 1.422-.461 2.199-.457.367 0 .71.035.984.101.278.067.477.172.559.266l.152-.137-.137-.156-.257.227.136.156.157-.137c-.153-.164-.375-.242-.641-.304a4.496 4.496 0 00-.934-.086c-.77 0-1.64.14-2.25.468-.183.102-.328.211-.437.344a.743.743 0 00-.14.664.922.922 0 00.335.488c.23.176.516.25.801.29.29.039.582.042.832.042h.11c.253.004.398.06.519.149.117.09.219.23.328.441.086.164.2.453.2.707a.7.7 0 01-.04.243c-.058.164-.164.277-.355.367a.75.75 0 01-.317.062v.41c.164 0 .332-.027.489-.101.273-.117.48-.332.57-.602.047-.125.062-.254.062-.379 0-.367-.144-.695-.246-.894-.117-.23-.246-.434-.445-.582-.195-.153-.45-.227-.762-.23h-.109c-.336-.005-.719-.008-1.016-.087a.986.986 0 01-.37-.16.535.535 0 01-.188-.277l-.016-.09c0-.066.02-.129.082-.203.059-.074.16-.16.313-.242.496-.274 1.336-.418 2.05-.418.32 0 .618.027.844.078.23.047.387.129.422.176a.204.204 0 00.29.02l.257-.227a.204.204 0 00.07-.141.213.213 0 00-.05-.152c-.18-.2-.45-.313-.766-.391a4.65 4.65 0 00-1.086-.117c-.836.004-1.754.164-2.395.512-.242.132-.437.289-.574.476a1.052 1.052 0 00-.215.625c0 .102.016.2.043.3.078.267.223.477.403.626.27.23.613.336.949.387.336.054.672.054.945.058h.11c.164.004.242.028.308.07.063.047.14.145.234.333.114.214.165.414.165.55a.373.373 0 01-.02.13c-.027.07-.062.113-.172.167a.464.464 0 01-.18.031c-.125 0-.285-.039-.437-.113a1.213 1.213 0 01-.379-.265l-.152.14.152-.137-.066-.074a.196.196 0 00-.2-.062l-.097.02a.6.6 0 00-.453.433l.195.066-.191-.078-.024.063a.19.19 0 00.004.172l.156.304c.024.051.067.086.121.102.051.02.11.015.157-.012a.58.58 0 00.293-.363l.007-.024-.191-.07-.137.156c.313.266.77.492 1.246.496v-.203"
              ></path>
              <path
                fill="#f5f4f6"
                d="M189.457 196.691c-3.887 0-7.602-.754-11.016-2.105l.032.02c2.773 1.617 7.172 2.593 10.984 2.593 4.164 0 8.621-1.054 10.988-2.594l.035-.023a29.796 29.796 0 01-11.023 2.11"
              ></path>
              <path
                fill="#231f20"
                d="M189.457 196.691v-.414c-3.836 0-7.496-.738-10.863-2.074a.408.408 0 00-.512.184.404.404 0 00.117.527l.031.024.036.023c2.87 1.672 7.304 2.644 11.191 2.648 2.117 0 4.3-.265 6.262-.73 1.965-.465 3.703-1.121 4.953-1.926v-.004l.039-.023a.413.413 0 00-.383-.727 29.325 29.325 0 01-10.871 2.078v.825c3.95 0 7.715-.762 11.18-2.137l-.157-.383-.226-.34-.04.024.231.34-.222-.344c-1.121.73-2.793 1.37-4.692 1.816-1.898.45-4.027.711-6.074.707-3.742.004-8.105-.969-10.777-2.535l-.207.355.242-.328-.028-.023-.246.332-.152.383a30.253 30.253 0 0011.168 2.133v-.41M215.91 184.914c.742-3.96 5.684-12.41 4.125-19.254-2.847-12.508-13.262-27.812-30.574-27.812-26.777 0-38.137 24.375-26.258 47.066-21.293-24.312 6.192-51.664 26.254-50.629 15.777.809 33.54 13.168 33.828 34.246.086 6.18-4.996 11.989-7.375 16.383"
              ></path>
              <path
                fill="#f5f4f6"
                d="M187.348 136.816a1.62 1.62 0 01.93-.543c.183-.05.41-.066.6-.07.087-.008.243.008.372.016l.098.008h.023-.004l.028.007c.035.012.07.02.109.024.3.066.621.328.848.644.23.309.394.715.355.98.008.15-.062.208-.098.29-.047.016-.074.086-.117.086l-.047.035-.062.027-.098.024s-1.777.05-2.547-.293c-.332-.153-.597-.301-.804-.477.101-.293.234-.558.414-.758zm-.66 2.184l.09.055c.1.062.214.129.359.195.539.266 1.066.45 1.656.555.59.097 1.191.136 1.855-.028l.098-.023c.027-.008.063-.016.125-.043.102-.04.207-.086.309-.137.215-.09.355-.254.523-.39.285-.332.488-.77.504-1.164.035-.208-.004-.387-.012-.583-.039-.175-.066-.363-.129-.523a3.283 3.283 0 00-.476-.914c-.406-.543-.965-1.02-1.723-1.2l-.281-.054-.074-.012-.082-.004-.098-.007c-.14-.004-.25-.02-.434-.008a3.869 3.869 0 00-.976.125c-.32.066-.64.215-.942.387a3.171 3.171 0 00-.667.601l-.004-.039c-.004-.2 0-.465.004-.637.003-.34.109-.714.253-1.05a6.282 6.282 0 011.11-1.747c.418-.464.851-.816 1.246-1.035.398-.234.75-.308.992-.355l.39-.012s-.132-.023-.382-.07c-.254 0-.66-.02-1.121.16a4.814 4.814 0 00-1.528.89c-.527.446-1.074 1.016-1.496 1.786-.21.383-.406.812-.48 1.344-.04.261-.055.44-.07.69a6.87 6.87 0 00-.008.755c.023.379.101.804.285 1.215a5.991 5.991 0 00-.086.73l-.012.203-.008.117.004.094.008.367c.012.493.07 1.047.172 1.532.047.246.14.492.207.73.086.234.207.461.313.68.128.21.28.402.418.594.156.18.332.335.492.492.707.578 1.43.87 2.144 1.004.344.078.68.074.98.07.305-.05.579-.07.813-.176.117-.047.227-.082.328-.125.09-.062.18-.117.262-.168.074-.054.149-.101.215-.144.059-.059.105-.11.152-.157l.274-.28s-.114.073-.325.214c-.05.035-.109.074-.171.113-.07.028-.149.059-.235.09-.082.031-.168.067-.262.102-.097.027-.207.039-.316.058-.215.059-.469.032-.73.032-.266-.055-.547-.079-.836-.196a4.487 4.487 0 01-1.688-1.074c-.5-.52-.8-1.234-.91-2.063a7.917 7.917 0 01-.039-1.304l.02-.258"
              ></path>
              <path
                fill="#231f20"
                d="M187.348 136.816l.312.266c.184-.21.387-.332.707-.41l.012-.004c.129-.035.332-.05.508-.05l.043-.005h.015c.051 0 .168.012.282.016l.023-.41-.027.41.101.008.024-.41-.028.41h.02l.031-.41v-.41h-.004a.41.41 0 00-.113.805l.027.007.016.004a.769.769 0 00.14.031l.067-.406-.086.402a.82.82 0 01.285.153c.11.082.223.199.317.328l.003.007c.082.11.157.243.207.364.051.125.075.238.07.293v.03l-.003.063.086-.003-.086.003.086-.003-.086.003v.004h.058l-.054-.015-.004.015h.058l-.054-.015.074.02-.07-.032-.004.012.074.02-.07-.032-.004.004c-.004.012-.031.047-.067.121l.375.172-.136-.387a.45.45 0 00-.172.102l-.051.047-.004.007-.004.004.203.192-.152-.235-.05.043.202.192-.152-.235.2.309v-.363a.347.347 0 00-.2.054l.2.309v-.363c-.09 0-.18.027-.25.086l-.009.004.149.382-.102-.398-.097.023.101.399-.008-.41h-.226a12.4 12.4 0 01-1.086-.047c-.414-.035-.844-.114-1.059-.211h.004c-.316-.145-.55-.278-.71-.414l-.266.312.39.137c.086-.262.203-.48.332-.621l.004-.008-.312-.266-.309-.273c-.23.258-.383.57-.496.902a.41.41 0 00.125.446c.254.21.55.375.898.53l.004.005c.387.168.86.238 1.32.281.462.043.9.05 1.16.05.153 0 .243-.003.247-.003l.094-.012.097-.023.047-.016.063-.027.101-.059.047-.035-.254-.324v.41a.451.451 0 00.278-.094c.07-.054.09-.086.093-.086l-.156-.148.129.172.027-.024-.156-.148.129.172-.2-.258.106.309c.047-.016.078-.04.094-.051l-.2-.258.106.309a.404.404 0 00.238-.215l-.035-.016.035.016-.035-.016.035.016s.028-.043.067-.121a.778.778 0 00.074-.325v-.03l-.414.01.41.052c.004-.04.008-.086.008-.13 0-.21-.055-.41-.133-.6a2.52 2.52 0 00-.308-.548l-.332.246.335-.242a2.43 2.43 0 00-.48-.5 1.616 1.616 0 00-.613-.305h-.02l-.082-.02-.097.4.113-.395-.028-.008-.113.395v.414h.004a.41.41 0 00.41-.399.41.41 0 00-.379-.426h-.027l-.102-.007h-.003c-.086-.004-.208-.016-.325-.02-.039 0-.074.004-.117.008l.05.406-.003-.41c-.207.004-.46.016-.707.082l.11.398-.094-.402a2.066 2.066 0 00-1.153.68l.317.265-.309-.273zm-.66 2.184l-.211.355.09.055.21-.355-.218.351c.113.067.242.145.402.219l.176-.375-.184.371c.57.277 1.137.477 1.766.59h.008c.312.05.636.09.976.09a4.27 4.27 0 001.043-.125l-.098-.399.094.399.098-.024-.094-.398.09.402c.039-.008.117-.031.195-.066l-.16-.38.149.384c.117-.043.234-.098.343-.153l-.183-.367.156.38c.16-.067.289-.157.387-.24.101-.085.175-.16.246-.214l.047-.047c.34-.394.578-.894.605-1.422l-.414-.011.406.066c.016-.09.02-.176.02-.25 0-.176-.024-.309-.024-.414l-.011-.074c-.036-.157-.063-.36-.149-.582l-.383.148.387-.14a3.681 3.681 0 00-.539-1.024l.004.004c-.441-.594-1.078-1.145-1.953-1.356l-.02-.003-.285-.055h-.008l-.07-.012-.043-.004-.082-.008-.102-.004h-.011c-.09-.003-.184-.011-.324-.011h-.145l.023.414-.007-.414c-.36.012-.707.043-1.075.137l.106.402-.09-.406c-.379.086-.734.25-1.059.437l-.027.02c-.27.187-.535.41-.754.675l.32.262.41-.035-.003-.04-.41.036.414-.012c-.004-.066-.004-.14-.004-.218 0-.141 0-.29.004-.395v-.008c0-.254.093-.59.222-.894v-.004a5.855 5.855 0 011.04-1.63l-.31-.273.305.274c.395-.438.797-.758 1.145-.953l.004-.004a2.61 2.61 0 01.867-.3l-.082-.407.016.41c.254-.004.39-.012.39-.012a.412.412 0 00.059-.816l-.383-.067-.07-.007c-.047 0-.113-.004-.184-.004-.265 0-.66.023-1.09.191l.149.383-.133-.39a5.23 5.23 0 00-1.66.968c-.555.465-1.14 1.074-1.59 1.902v-.003c-.223.402-.445.886-.531 1.484-.04.273-.055.469-.07.723-.012.152-.02.312-.02.48 0 .106.004.215.012.324.023.418.109.895.32 1.36l.375-.168-.406-.075a6.969 6.969 0 00-.094.782v.004l-.008.199v.004l-.008.117v.121l.008.367c.012.516.074 1.094.184 1.61l.402-.086-.406.07c.058.305.16.559.219.773l.011.028c.098.27.227.508.324.715l.024.039c.144.234.3.433.43.617l.027.035c.18.2.363.363.512.512l.027.027a5.124 5.124 0 002.332 1.09l.074-.406-.09.402c.309.07.602.082.852.082.078 0 .152 0 .223-.004l.066-.004c.277-.05.582-.062.914-.21l-.172-.372.149.383c.097-.04.214-.074.351-.137l.051-.027c.094-.059.18-.117.262-.168l.218-.145.07-.058a5.98 5.98 0 01.15-.153l.003-.003.274-.282a.412.412 0 00-.528-.629c-.004.004-.113.079-.32.215l-.004.004c-.05.035-.11.07-.168.113l.227.34-.153-.383c-.062.028-.14.055-.226.09l-.266.102.149.383-.102-.399c-.059.016-.164.031-.293.055l-.031.008c-.047.011-.125.02-.23.02-.106 0-.235-.009-.391-.009v.415l.078-.407c-.293-.054-.543-.082-.762-.172l-.02-.007c-.488-.16-1.085-.52-1.527-.973l.004.004c-.426-.442-.7-1.07-.797-1.832l-.41.054.41-.05a6.765 6.765 0 01-.035-1.23v.003l.016-.258-.41-.027-.211.355.21-.355-.41-.023-.02.253v.004a10.36 10.36 0 00-.01.48c0 .31.019.599.054.895v.004c.113.895.445 1.7 1.015 2.297h.004c.547.559 1.23.969 1.852 1.18l.133-.39-.157.382c.36.14.68.168.915.215l.078.008c.125 0 .25.007.39.007.137 0 .29-.007.45-.05l-.11-.399.078.407c.09-.02.203-.032.34-.063l.047-.016c.094-.039.184-.074.262-.101.082-.031.16-.063.238-.094l.078-.039.172-.117-.004.004c.215-.14.328-.219.328-.219l-.23-.34-.301-.285s-.09.098-.27.281l.004-.004c-.047.047-.097.102-.156.157l.297.289-.227-.344c-.066.043-.14.09-.214.144v-.003l-.258.167.222.348-.172-.375c-.066.031-.171.063-.304.117l-.024.008c-.132.067-.379.094-.707.145l.067.406-.004-.414c-.074.004-.145.004-.215.004a3.15 3.15 0 01-.668-.059l-.016-.004a4.311 4.311 0 01-1.96-.922l-.262.32.289-.292c-.172-.168-.336-.32-.473-.473l-.308.274.335-.239c-.144-.199-.289-.386-.402-.574l-.351.219.37-.18c-.109-.226-.222-.445-.296-.644l-.387.144.399-.117c-.079-.262-.165-.492-.2-.688l-.004-.015a8.155 8.155 0 01-.164-1.453l-.007-.364-.41.008.41-.004v-.078l.007-.11.008-.198c.012-.223.04-.45.082-.684a.4.4 0 00-.031-.242 2.983 2.983 0 01-.25-1.067v-.004c-.004-.09-.008-.18-.008-.273 0-.144.008-.285.016-.426.015-.25.031-.41.066-.66.067-.465.234-.836.434-1.203h.004a5.831 5.831 0 011.394-1.668 4.464 4.464 0 011.403-.82l.011-.004c.297-.117.567-.133.793-.133h.172l.008-.41-.074.406c.25.047.382.07.382.07l.075-.406-.016-.41-.383.012-.066.007a3.275 3.275 0 00-1.125.403l.207.355-.2-.363c-.445.254-.906.629-1.35 1.121l-.005.004a6.744 6.744 0 00-1.183 1.863l.004-.004c-.157.371-.282.786-.29 1.207l.415.004-.415-.011c-.003.117-.003.27-.003.418 0 .082 0 .164.003.242v.02l.004.038a.4.4 0 00.29.36c.16.05.335 0 .44-.133.153-.188.356-.363.587-.52l-.239-.34.208.356c.277-.16.558-.289.82-.344l.02-.004c.285-.074.554-.101.878-.109h.016l.098-.004c.093 0 .175.008.3.012l.012-.41-.023.41.101.004h-.004l.059.004.05.011.07-.406-.077.402.285.055.074-.402-.094.398c.637.153 1.118.555 1.485 1.047h.004c.175.23.308.5.418.805v.012c.043.101.07.269.117.468l.398-.094-.41.016c.008.168.024.29.024.383 0 .043-.004.078-.008.117l-.004.05c-.008.27-.168.645-.402.911l.308.27-.262-.317c-.101.082-.18.156-.246.211a.806.806 0 01-.175.117l-.028.008c-.09.047-.183.09-.273.129l-.012.004-.05.016h-.005l-.097.023h-.004c-.293.074-.57.102-.848.102-.277 0-.558-.032-.844-.079l-.066.407.074-.403a5.804 5.804 0 01-1.55-.52l-.005-.003a2.408 2.408 0 01-.32-.176h-.004l-.09-.055a.41.41 0 00-.62.329l.41.023"
              ></path>
            </svg>
            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader