<template>
  <el-card class="question-card">
    <h2>创建题目</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="题目" required>
        <el-input v-model="form.title" size="small"></el-input>
      </el-form-item>
      <el-form-item
        :label="item.label"
        required
        v-for="item in form.options"
        :key="item.index"
      >
        <el-row :gutter="16">
          <el-col :span="12">
            <el-input v-model="item.text"></el-input>
          </el-col>
          <el-col :span="11">
            <el-checkbox v-model="item.correct"></el-checkbox> 正确答案
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="分数">
        <el-select v-model="form.score">
          <el-option value="1"></el-option>
          <el-option value="2"></el-option>
          <el-option value="3"></el-option>
          <el-option value="4"></el-option>
          <el-option value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="question__footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import request from '../utils/request';

export default {
  data() {
    return {
      form: {
        title: '',
        options: Array(4)
          .fill(0)
          .map((_, index) => ({
            index,
            label: String.fromCharCode(65 + index),
            text: '',
            correct: false,
          })),
        score: 1,
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!(await this.$refs.form.validate())) return;

      var {
        form: { title, options, score },
      } = this.$data;

      const list = options.map(({ label, text }) => ({
        order: label,
        contend: text,
      }));

      try {
        await request.post('/api/question/radios', {
          head: title,
          point: score,
          options: list,
          answer: list[options.findIndex(({ correct }) => correct)],
        });

        this.$notify({
          title: '成功',
          message: '题目提交成功',
          type: 'success',
        });
      } catch (error) {
        this.$notify.error({
          title: '错误',
          message: error.message,
        });
      }
    },
    onCancel() {
      this.$router.replace({ name: 'main' });
    },
  },
};
</script>

<style lang="less">
.question-card {
  width: 600px;
  margin: auto;
}
.question__footer {
  float: right;
}
</style>
