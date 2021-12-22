<template>
  <div id="chat">
    <header>
      Header
    </header>
    <main>
      <ul>
        <li v-for="(item, index) in data" :key="index" :class="[item.user, setAlign(item.type, item.user), item.type]">
          <template v-if="item.type === 'message'">
            <div class="chat">
              <span class="message">
                {{ item.message }}
                <span class="datetime">
                  {{ Day.getToDate(item.datetime, 'HH:mm') }}
                </span>
              </span>
            </div>
          </template>
          <template v-else-if="item.type === 'dayLine'">
            <p class="dayLine">
              {{ Day.getToDate(item.datetime, 'YYYY년 MM월 DD일 dddd') }}
            </p>
          </template>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Chat from '@/assets/data/chat.js'

export default {
  name: 'Chat',
  created () {
    console.log()
  },
  data () {
    return {
      data: Chat
    }
  },
  methods: {
    setAlign (type, sender) {
      switch (type) {
        case 'message':
          if (sender === 'Louis') {
            return 'right'
          } else {
            return 'left'
          }
        case 'dayLine':
          return 'center'
        default:
          return 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 46px;
}

#chat {
  height: 100vh;
  background-color: #AFC0CF;
}
ul {
  padding: 9px;
}
li {
  &.dayLine {
    margin-top: 15px;
    margin-bottom: 4px;
  }
  &.right {
    text-align: right;
    .datetime {
      left: -34px;
    }
  }
  &.left {
    text-align: left;
    .chat .message {
      background-color: #fff;
    }
    .datetime {
      right: -34px;
    }
  }
  &.center {
    text-align: center;
  }
  .chat {
    color: #282A2B;
    .message {
      position: relative;
      display: inline-block;
      font-size: 15px;
      margin-top: 3.5px;
      margin-bottom: 3.5px;
      border-radius: 13.5px;
      padding: 8px 12px;
      background-color: #FAE64C;

      .datetime {
        width: 30px;
        position: absolute;
        bottom: 0;
        color: rgba(#000, .5);
        font-size: 12px;
      }
    }
  }

  .dayLine {
    margin-top: 15px;
    margin-bottom: 4px;
    padding: 5px 10px;
    font-size: 11.5px;
    border-radius: 34px;
    margin: 0 auto;
    color: #fff;
    display: inline-block;
    background-color: rgba(#000, .15);
  }
}

</style>
