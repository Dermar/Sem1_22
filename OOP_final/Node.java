enum NodeTypes{NUMBER, OPERATOR}

public class Node{
    NodeTypes type;
    double number;
    char operator;
    Node left;
    Node right;

    Node(char operator, Node left, Node right){
        type = NodeTypes.OPERATOR;
        this.operator = operator;
        this.left = left;
        this.right = right;
    }

    Node(double number){
        type = NodeTypes.NUMBER;
        this.number = number;
    }

    public double bt(Node root, String total){
        if (root == null){
            return 0;
        }
        
        if (root.right == null && root.left == null){
           return Double.valueOf(root.number);
        }
        
        double left = bt(root.left, total);
        double right = bt(root.right, total);

        return process(root.operator, left, right);
    }

    public double process(char n, double left, double right){
        String op = Character.toString(n);
        if (op.equals("*")){
            return left * right;
        }
        if (op.equals("+")){
            return left + right;
        }
        if (op.equals("/")){
            return left / right;
        }
        else{
            return left - right;
        }
        
    }

    public static void main(String[] args){
        Node left = new Node(3);
        Node right = new Node(4);
        char plus = "+".charAt(0);
        Node root = new Node(plus, left, right);
        System.out.println(root.bt(root, ""));
    }
}