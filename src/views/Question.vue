<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="题目">
      <el-input v-model="form.title" size="small"></el-input>
    </el-form-item>
    <el-form-item
      :label="item.label"
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
  </el-form>
</template>

<script>
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
    onSubmit() {
      console.log('submit!');
    },
  },
};
</script>
