import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z, ZodError } from "zod";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /**
   * zod での Validation
   */
  const FormData = z.object({
    id: z.string().email("メアドじゃない"),
    password: z
      .string()
      .min(8, "8文字以下だ")
      .max(32, "32文字以上だ")
      .regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i, "PWに半角英数字入れて"),
  });

  /**
   * 登録時の処理を関数化
   * @param  data formから受け取る値
   */
  const onSubmit = (data) => {
    try {
      FormData.parse(data);
      // アラートで結果出してみる (見やすいようにJSON 形式にする)
      alert(JSON.stringify(data));
    } catch (e) {
      if (e instanceof ZodError) {
        alert(JSON.stringify(e.flatten().fieldErrors));
      } else {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 6,
          p: 4,
          height: "70vh",
          width: "280px",
          m: "20px auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            mt={8}
            display="flex"
            flexDirection="column"
            gap={5}
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="bold">
              ログイン画面
            </Typography>

            <TextField
              type="id"
              name="id"
              {...register("id", { required: true })}
              error={errors.id}
              helperText={errors.id?.message}
              variant="standard"
              placeholder="ユーザーIDを入力してください"
              fullWidth
            />
            <TextField
              type="password"
              name="password"
              {...register("password", { required: true })}
              error={errors.password}
              helperText={errors.password?.message}
              variant="standard"
              placeholder="パスワードを入力してください"
              fullWidth
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>
              ログイン
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
